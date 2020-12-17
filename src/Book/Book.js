import React, { Component } from "react";

class Book extends Component {
  render() {
    const books = this.props.books.map((book, i) => (
      <>
        <p key={i}>{book.title}</p>
        <p>{book.author}</p>
        <p>{book.price}</p>
        <p>{book.description}</p>
      </>
    ));

    return <div className="Book">{books}</div>;
  }
}

export default Book;
