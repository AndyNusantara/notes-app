import React from "react";

function ArchiveButton({ id, onArchive, archived }) {
  const textButton = archived ? "Pindahkan" : "Arsipkan";
  return (
    <button className="note-item__archive-button" onClick={() => onArchive(id)}>
      {textButton}
    </button>
  );
}

export default ArchiveButton;
