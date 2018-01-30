import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookList from './BookList';

class Shelf extends Component {
    
    static propTypes = {
        onChange: PropTypes.func,
        books: PropTypes.array,
        shelfType: PropTypes.object
    }

    handleChangeBook = (book, shelf) => {
        const { onChange } = this.props;
        if (onChange) {
            onChange.call(this, book, shelf);
        }
    }

    render () {
        const { books, shelfType } = this.props;
        return (
                <div>
                    <h2 className="bookshelf-title">{shelfType.desc}</h2>
                    <div className="bookshelf-books">
                        <BookList listBooks={ books.filter((book) => book.shelf === shelfType.type) } onChangeBook={ this.handleChangeBook}/>
                    </div>
                </div>
        )
    }

}

export default Shelf
