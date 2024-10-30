import { useContext } from "react";
import propsContext from "../context/propsContext";

export default function usePropsContext() {
  return useContext(propsContext);
}
