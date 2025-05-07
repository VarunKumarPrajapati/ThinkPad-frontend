import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Playground = () => {
  const [notes, setNotes] = useState([
    { id: 1, text: "This is a small note, concise and to the point." },
    {
      id: 2,
      text: "Here is a big note, elaborating on various aspects in detail.",
    },
    {
      id: 3,
      text: "This note covers all sizes, blending brevity with elaboration.",
    },
    { id: 4, text: "Another small note, brief and succinct in its message." },
    {
      id: 5,
      text: "A big note once again, diving deep into the subject matter.",
    },
    { id: 6, text: "This is a small note, concise and to the point." },
    {
      id: 7,
      text: "Here is a big note, elaborating on various aspects in detail.",
    },
    {
      id: 8,
      text: "This note covers all sizes, blending brevity with elaboration.",
    },
    { id: 9, text: "Another small note, brief and succinct in its message." },
    {
      id: 10,
      text: "A big note once again, diving deep into the subject matter.",
    },
    { id: 11, text: "This is a small note, concise and to the point." },
    {
      id: 12,
      text: "Here is a big note, elaborating on various aspects in detail.",
    },
    {
      id: 13,
      text: "This note covers all sizes, blending brevity with elaboration.",
    },
    { id: 14, text: "Another small note, brief and succinct in its message." },
    {
      id: 15,
      text: "A big note once again, diving deep into the subject matter.",
    },
    { id: 16, text: "This is a small note, concise and to the point." },
    {
      id: 17,
      text: "Here is a big note, elaborating on various aspects in detail.",
    },
    { id: 24, text: "Another small note, brief and succinct in its message." },
    {
      id: 25,
      text: "A big note once agaisalkjflskajflksadfjdsalkfjlksad;fsa sakfjsaljfsadlkfslkafdlkjdsajfkdsajkfjkdsalkfjlkjdsalkfjdsalkfjklsdaj;flkasjd;fladskjf;lkdsajf;lsakjdf;lksadjf;lksajf;ldsakjflkdsajflkn, diving deep into the subject matter.",
    },
    { id: 26, text: "This is a small note, concise and to the point." },
    {
      id: 27,
      text: "Here is a big note, elaborating on various aspects in detail.",
    },
    {
      id: 28,
      text: "This note covers all sizes, blending brevity with elaboration.",
    },
    { id: 29, text: "Another small note, brief and succinct in its message." },
    {
      id: 30,
      text: "A big note once again, diving deep into the subject matter.",
    },
  ]);

  const deleteNote = (id) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  return (
    <div className="p-4 columns-4">
      <AnimatePresence>
        {notes.map((note) => (
          <motion.div
            key={note.id}
            layout
            className="relative p-3 mb-4 text-black break-words border-2 border-black rounded-lg break-inside-avoid"
          >
            <button
              onClick={() => deleteNote(note.id)}
              className="absolute px-1.5 text-white bg-red-400 rounded-full top-2 right-2 "
            >
              ✕
            </button>
            <p>{note.text}</p>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Playground;
