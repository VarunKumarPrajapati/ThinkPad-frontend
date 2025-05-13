import { useSelector } from "react-redux";

import { Box, NoteList } from "../components/ui";

import { usePropsContext } from "../hooks";
import { useFetchDistinctColorsQuery } from "../store";

export default function SearchNotePage() {
  const { data } = useFetchDistinctColorsQuery();
  const { search, setSearch } = usePropsContext();
  const { localNotes } = useSelector((state) => state.notes);

  let filteredNotes = [];

  if (search.query) {
    filteredNotes = localNotes.filter((note) => {
      return (
        note.title.includes(search.query) || note.content.includes(search.query)
      );
    });
  }

  if (search.color) {
    if (!filteredNotes.length) filteredNotes = localNotes;
    filteredNotes = filteredNotes.filter((note) => {
      return note.color === search.color;
    });
  }

  const handleClick = (data) => {
    setSearch((prev) => ({ ...prev, color: data }));
  };

  return (
    <div className="w-full h-full px-2 py-4">
      {filteredNotes.length ? (
        <NoteList notes={filteredNotes} />
      ) : (
        <div className="w-full mt-10 text-center ">No matching results.</div>
      )}
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
