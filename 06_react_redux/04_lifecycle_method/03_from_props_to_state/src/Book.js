import React, { Component } from "react";

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: null,
      isbn: null
    }
  }

  findBook() {
    fetch(`https://openlibrary.org/api/books?bibkeys=ISBN:${this.props.isbn}8&format=json&jscmd=data`)
      .then(response => response.json())
      .then(bookData => {
        console.log(bookData);
        this.setState({book: Object.values(bookData)[0], isbn: this.props.isbn});
      })
  }

  componentDidMount() {
    this.findBook();
  }

  componentDidUpdate() {
    if (this.props.isbn && this.props.isbn !== this.state.isbn) {
      this.findBook();
    }
  }

  render() {
    return (
      <div>
        {this.state.book
          ? (
            <div>
              <div>{this.state.book.title}</div>
              <img src={this.state.book.cover.medium} />
            </div>
          )
          : null
        }
      </div>
    )
  }
}

export default Book;
