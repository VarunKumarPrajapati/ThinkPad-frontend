import DesktopCreateNote from "./DesktopCreateNote/DesktopCreateNote";
import MobileCreateNote from "./MobileCreateNote/MobileCreateNote";

import usePropsContext from "../../hooks/use-propsContext";
import { CreateNoteProvider } from "../../context/createNoteContext";

export default function CreateNote() {
  const { isMobile } = usePropsContext();

  return (
    <>
      <CreateNoteProvider>
        {isMobile ? (
          <MobileCreateNote />
        ) : (
          <div className="justify-center hidden md:flex">
            <DesktopCreateNote />
          </div>
        )}
      </CreateNoteProvider>
    </>
  );
}
