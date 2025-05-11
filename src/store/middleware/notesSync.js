import { noteApi } from "../apis/noteApi";
import { addNoteLocal, updateNoteLocal, deleteNoteLocal } from "../index";

const notesSyncMiddleware = (storeApi) => (next) => (action) => {
  const result = next(action);

  if (addNoteLocal.match(action)) {
    storeApi.dispatch(noteApi.endpoints.createNote.initiate(action.payload));
  }

  if (updateNoteLocal.match(action) && action.payload.sync) {
    delete action.payload.sync
    storeApi.dispatch(noteApi.endpoints.updateNote.initiate(action.payload));
  }

  if (deleteNoteLocal.match(action)) {
    storeApi.dispatch(noteApi.endpoints.deleteNote.initiate(action.payload));
  }

  return result;
};

export default notesSyncMiddleware;
