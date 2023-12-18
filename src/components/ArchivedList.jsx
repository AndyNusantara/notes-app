import React from "react";
import NotesItem from "./NotesItem";

function ArchivedList({ notes, onDelete, onArchive }) {
  let filteredNotes = notes.filter((list) => list.archived);
  if (filteredNotes.length == 0) {
    return <div className="notes-list__empty-message">Tidak ada catatan</div>;
  } else {
    return (
      <div className="notes-list">
        {filteredNotes.map((list) => (
          <NotesItem
            key={list.id}
            id={list.id}
            {...list}
            onDelete={onDelete}
            onArchive={onArchive}
          />
        ))}
      </div>
    );
  }
}

export default ArchivedList;
