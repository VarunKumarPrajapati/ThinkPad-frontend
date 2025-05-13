import React from "react";
import { useSelector } from "react-redux";

import { Box, NoteList } from "../components/ui";

import { usePropsContext } from "../hooks";
import { useLazyFetchDistinctColorsQuery } from "../store";

export default function SearchNotePage() {
  const [trigger, { data }] = useLazyFetchDistinctColorsQuery();
  const { search, setSearch } = usePropsContext();
  const { localNotes } = useSelector((state) => state.notes);

  let filteredNotes = [];

  if (search.query) {
    filteredNotes = localNotes.filter((note) => {
      return (
        note.title?.toLowerCase().includes(search.query.toLowerCase()) ||
        note.content?.toLowerCase().includes(search.query.toLowerCase())
      );
    });
  }

  if (search.color) {
    if (!filteredNotes.length && !search.query) filteredNotes = localNotes;
    filteredNotes = filteredNotes.filter((note) => {
      return note.color === search.color;
    });
  }

  const handleClick = (data) => {
    setSearch((prev) => ({ ...prev, color: data }));
  };

  React.useEffect(() => {
    trigger();
  }, [trigger]);

  return (
    <div className="w-full h-full px-2 py-4">
      {(search.query || search.color) && !filteredNotes.length && (
        <div className="w-full mt-10 text-center ">No matching results.</div>
      )}
      <NoteList notes={filteredNotes} />
      <div className="flex flex-col items-center w-full min-h-full ">
        {!(search.query || search.color) && !!data?.length && (
          <Box
            list={data}
            heading="colors"
            type="color"
            onClick={handleClick}
          />
        )}
      </div>
    </div>
  );
}
