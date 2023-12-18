import React from "react";
import Header from "./Header";
import AddNotes from "./AddNotes";
import NotesList from "./NotesList";
import SearchNotes from "./SearchNotes";
import { getInitialData } from "../utils";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      initialNotes: getInitialData(),
    };

    this.onAddNotes = this.onAddNotes.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onArchive = this.onArchive.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  onAddNotes(props) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title: props.title,
            body: props.body,
            createdAt: +new Date(),
            archived: false,
          },
        ],
        initialNotes: [
          ...prevState.initialNotes,
          {
            id: +new Date(),
            title: props.title,
            body: props.body,
            createdAt: +new Date(),
            archived: false,
          },
        ],
      };
    });
  }

  onDelete(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes: notes, initialNotes: notes });
  }

  onArchive(id) {
    const notes = this.state.notes.map((note) => {
      if (note.id === id) {
        return {
          ...note,
          archived: !note.archived,
        };
      } else {
        return {
          ...note,
        };
      }
    });
    this.setState({ notes: notes, initialNotes: notes });
  }

  onSearch(title) {
    const initialData = this.state.initialNotes;
    if (title === "") {
      this.setState({ notes: initialData });
    } else {
      const filteredNotes = initialData.filter((note) =>
        note.title.toLowerCase().includes(title.toLowerCase())
      );
      this.setState({ notes: filteredNotes });
    }
  }

  render() {
    return (
      <div className="note-app__body">
        <Header />
        <AddNotes onAddNotes={this.onAddNotes} />
        <SearchNotes onSearch={this.onSearch} />
        <NotesList
          notes={this.state.notes}
          onDelete={this.onDelete}
          onArchive={this.onArchive}
        />
      </div>
    );
  }
}

export default NotesApp;
