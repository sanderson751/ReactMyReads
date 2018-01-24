import React, { Component } from 'react'
import Search from './Search';
import BookList from './BookList';
import * as BooksAPI from '../BooksAPI'
import {debounce} from 'throttle-debounce';

class AddBookToLibrary extends Component {

    constructor(props) {
        super(props);
        this.onSearch = debounce(1000, this.handleSearch);
    }

    state = {
        books: [],
        booksShelf: []
    }

    componentDidMount () {
        BooksAPI.getAll().then((response) => {
            this.setState({
                booksShelf: response
            })
        });
    }

    validateBookShelf = (book, booksShelf) => {
        return booksShelf.find((obj) => {return book.id === obj.id});
    }

    handleSearch = (value) => {
        const { booksShelf } = this.state;
        BooksAPI.search(value).then(booksResult => {
            if (Array.isArray(booksResult)) {
                booksResult.forEach((book) => {
                    let obj = this.validateBookShelf(book, booksShelf);
                    if (obj) {
                         book = Object.assign(book, obj)
                    }
                });
            } else {
                booksResult = [];
            }
            this.setState({
              books : booksResult
            })
        });
    }

    handleChangeShelfs = (response) => {
        const { onChangeShelfs } = this.props;
        if (onChangeShelfs) {
            onChangeShelfs.call(this, response);
        }
    }

    handleChangeBook = (book, shelf) => {
        BooksAPI.update(book, shelf).then((response) => {
            let booksTemp = this.state.books.slice();
            booksTemp.find((result) => book.id === result.id).shelf = shelf;
            this.setState({
                books: booksTemp
            }, this.handleChangeShelfs(response))
        })
    }

    render () {
      const { books } = this.state;
        return (
            <div>
                <Search onSearch={this.onSearch} />
                <div className="search-books-results">
                    <BookList listBooks={ books } onChangeBook={ this.handleChangeBook}/>
                </div>
            </div>
        )
    }
}

export default AddBookToLibrary
