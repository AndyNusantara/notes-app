import React from "react";
import ArchivedList from "./ArchivedList";
import UnArchivedList from "./UnArchivedList";

function NotesList({ notes, onDelete, onArchive }) {
  return (
    <div>
      <h1>Catatan Aktif</h1>
      <UnArchivedList notes={notes} onDelete={onDelete} onArchive={onArchive} />
      <h1>Arsip</h1>
      <ArchivedList notes={notes} onDelete={onDelete} onArchive={onArchive} />
    </div>
  );
}

export default NotesList;
