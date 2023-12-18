import React from "react";

class AddNotes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      char_limit: 50,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    if (this.state.char_limit > 0) {
      this.setState(() => {
        return {
          title: event.target.value,
          char_limit: 50 - event.target.value.length,
        };
      });
    } else if (event.target.value.length < this.state.title.length) {
      this.setState(() => {
        return {
          title: event.target.value,
          char_limit: 50 - event.target.value.length,
        };
      });
    }
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.onAddNotes(this.state);
  }

  render() {
    return (
      <div className="note-input">
        <div>
          <h1 className="note-input__title">Add Notes</h1>
          <h3 className="note-input__title__char-limit">
            {this.state.char_limit}
          </h3>
        </div>
        <form onSubmit={this.onSubmitEventHandler}>
          <input
            placeholder="Add title here..."
            type="text"
            value={this.state.title}
            onChange={this.onTitleChangeEventHandler}
          />
          <textarea
            placeholder="Add notes here..."
            rows="15"
            value={this.state.body}
            onChange={this.onBodyChangeEventHandler}
          />
          <button>Add Notes</button>
        </form>
      </div>
    );
  }
}

export default AddNotes;
