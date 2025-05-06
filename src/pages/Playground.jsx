import { Note } from "../components/common";
export default function Playground() {
  const note = {
    title: "Sample Note",
    content: "This is a sample note.",
  };
  return (
    <main className="w-screen h-screen font-poppins">
      <div className="flex items-center justify-center w-full h-full">
        <Note note={note} />
      </div>
    </main>
  );
}
