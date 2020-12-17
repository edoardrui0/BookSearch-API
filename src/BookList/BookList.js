import React, { Component } from "react";
import Book from "../Book/Book.js";

class BookList extends Component {
  render() {
    return (
      <div className="BookList">
        <Book books={this.props.books} />
      </div>
    );
  }
}

export default BookList;
