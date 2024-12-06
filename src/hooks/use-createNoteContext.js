import { useContext } from "react";
import CreateNoteContext from "../context/createNoteContext";

function useCreateNoteContext() {
  return useContext(CreateNoteContext);
}

export default useCreateNoteContext;
