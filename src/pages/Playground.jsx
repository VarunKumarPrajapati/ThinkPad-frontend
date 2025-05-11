import { useState } from "react";

const Note = ({ title, content, isExpanded, onToggle }) => {
  return (
    <li
      className={`p-4 bg-white border border-gray-200 rounded-lg shadow-md cursor-pointer transition-all duration-300 ease-in-out transform ${
        isExpanded
          ? "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 z-50 scale-105"
          : "hover:scale-105"
      }`}
      onClick={onToggle}
    >
      <h2 className="mb-2 text-xl font-semibold">{title}</h2>
      <p className={`text-gray-700 ${isExpanded ? "block" : "line-clamp-2"}`}>
        {content}
      </p>
    </li>
  );
};

const NoteList = ({ notes }) => {
  const [expandedNoteId, setExpandedNoteId] = useState(null);

  const handleToggleExpand = (id) => {
    setExpandedNoteId((prevId) => (prevId === id ? null : id));
  };

  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {notes.map((note) => (
        <Note
          key={note.id}
          title={note.title}
          content={note.content}
          isExpanded={expandedNoteId === note.id}
          onToggle={() => handleToggleExpand(note.id)}
        />
      ))}
    </ul>
  );
};

const Playground = () => {
  const notes = [
    {
      id: 1,
      title: "Meeting Notes",
      content: "Discuss project milestones and deadlines with the team.",
    },
    {
      id: 2,
      title: "Shopping List",
      content: "Buy milk, eggs, bread, and coffee for the week.",
    },
    {
      id: 3,
      title: "Workout Plan",
      content: "Monday: Cardio, Wednesday: Strength training, Friday: Yoga.",
    },
    // Add more notes as needed
  ];

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="mb-6 text-3xl font-bold text-center">Notes</h1>
      <NoteList notes={notes} />
    </div>
  );
};

export default Playground;
