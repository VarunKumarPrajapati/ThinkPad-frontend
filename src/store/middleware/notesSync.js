import { noteApi } from "../apis/noteApi";
import {
  addNoteOptimistic,
  updateNoteById,
  removeNoteById,
  replaceTempIdWithRealId,
  rollbackNoteOnError,
} from "../index";

const notesSyncMiddleware = (storeApi) => (next) => (action) => {
  const result = next(action);

  if (addNoteOptimistic.match(action)) {
    const { _id: tempId, ...payload } = action.payload;
    storeApi
      .dispatch(noteApi.endpoints.createNote.initiate(payload))
      .then(({ data }) => {
        storeApi.dispatch(replaceTempIdWithRealId({ tempId, _id: data._id }));
      })
      .catch(() => {
        storeApi.dispatch(rollbackNoteOnError(tempId));
      });
  }

  if (updateNoteById.match(action) && action.payload.syncFlag) {
    delete action.payload.syncFlag;
    storeApi.dispatch(noteApi.endpoints.updateNote.initiate(action.payload));
  }

  if (removeNoteById.match(action)) {
    storeApi.dispatch(noteApi.endpoints.deleteNote.initiate(action.payload));
  }

  return result;
};

export default notesSyncMiddleware;
