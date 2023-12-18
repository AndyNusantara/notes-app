import React from "react";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";
import { showFormattedDate } from "../utils";

function NotesItem({
  id,
  title,
  createdAt,
  archived,
  body,
  onDelete,
  onArchive,
}) {
  return (
    <div className="note-item">
      <div className="note-item__content">
        <h3 className="note-item__title">{title}</h3>
        <h5 className="note-item__date">{showFormattedDate(createdAt)}</h5>
        <h4 className="note-item__body">{body}</h4>
      </div>
      <div className="note-item__action">
        <ArchiveButton id={id} onArchive={onArchive} archived={archived} />
        <DeleteButton id={id} onDelete={onDelete} />
      </div>
    </div>
  );
}

export default NotesItem;
