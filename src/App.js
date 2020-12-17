import React, { Component } from "react";
import BookList from "./BookList/BookList.js";

const books = [
  {
    title: "Henry I",
    author: "Author #1",
    price: "$50.00",
    description: "lorem ispum this is a description #1",
  },
  {
    title: "Henry VIII",
    author: "Author #3",
    price: "$489.00",
    description: "lorem ispum this is a description #2",
  },
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <BookList books={books} />
      </div>
    );
  }
}

export default App;
