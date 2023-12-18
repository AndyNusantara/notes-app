import React from "react";

function Header() {
  return (
    <div className="note-app__header">
      <div className="note-app__header-logo">
        <img src="/logo.png" alt="logo" />
      </div>
      <div className="note-app__header-text">
        <h1>Your Notes</h1>
      </div>
    </div>
  );
}

export default Header;
