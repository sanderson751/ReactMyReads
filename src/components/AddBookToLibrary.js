import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Search from './Search';
import BookList from './BookList';
import * as BooksAPI from '../BooksAPI'

class AddBookToLibrary extends Component {

    static propTypes = {
        onChangeShelfs: PropTypes.func.isRequired
    }

    state = {
        books: []
    }

    handleSearch = (value) => {
        BooksAPI.search(value).then(booksResult => {
            this.setState({
              books : Array.isArray(booksResult) ? booksResult : []
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
                <Search onSearch={this.handleSearch} />
                <div className="search-books-results">
                    <BookList listBooks={ books } onChangeBook={ this.handleChangeBook}/>
                </div>
            </div>
        )
    }
}

export default AddBookToLibrary
