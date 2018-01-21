import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from './Select';

class BookList extends Component {
    
    static propTypes = {
        listBooks: PropTypes.array.isRequired,
        onChangeBook: PropTypes.func.isRequired
    }

    handleSelectChange = (book, shelf) => {
        const { onChangeBook } = this.props;
        if (onChangeBook) {
            onChangeBook.call(this, book, shelf);
        }
    }

    render () {
        const { listBooks } = this.props;
        return (
            <ol className="books-grid">
                {listBooks.map((book) => (
                    <li key={book.id}>
                        <div className="book">
                            <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                                <div className="book-shelf-changer">
                                    <Select optionSelected={book.shelf ? book.shelf : 'none'} onChange={(value) => this.handleSelectChange(book, value)} />
                                </div>
                            </div>
                            <div className="book-title">{book.title}</div>
                            <div className="book-authors">{book.authors ? book.authors.join(', ') : ''}}</div>
                        </div>
                    </li>
                ))}
            </ol>
        )
    }

}

export default BookList
