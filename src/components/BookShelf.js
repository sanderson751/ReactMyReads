import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import Shelf from './Shelf';
import * as BooksAPI from '../BooksAPI'

class BookShelf extends Component {
    
    state = {
        shelfTypes : [
            {type: 'currentlyReading', desc: 'Currently Reading'},
            {type: 'wantToRead', desc: 'Want to Read'},
            {type: 'read', desc: 'Read'}
        ],
        booksShelf : []
    }

    componentDidMount () {
        BooksAPI.getAll().then((booksShelf) => {
            this.setState({ booksShelf })
        })
    }

    handleChangeBook = (book, shelf) => {
        const { booksShelf } = this.state;
        BooksAPI.update(book, shelf).then((response) => {
            let booksTemp = booksShelf.slice();
            booksTemp.find((result) => book.id === result.id).shelf = shelf;
            this.setState({
                booksShelf: booksTemp
            });
        })
    }

    render () {
        const { shelfTypes, booksShelf } = this.state;
        return (
            <div className="bookshelf">
                {shelfTypes.map((shelfType, index) => (
                    <Shelf key={index} shelfType={shelfType} books={booksShelf} onChange={this.handleChangeBook}/>    
                ))}
            </div>
        )
    }

}

export default BookShelf
