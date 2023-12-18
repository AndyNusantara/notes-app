import React from "react";

class SearchNotes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(
      () => {
        return {
          title: event.target.value,
        };
      },
      () => {
        this.props.onSearch(this.state.title);
      }
    );
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.title}
          placeholder="Search notes..."
          onChange={this.onTitleChangeEventHandler}
        />
      </div>
    );
  }
}

export default SearchNotes;
