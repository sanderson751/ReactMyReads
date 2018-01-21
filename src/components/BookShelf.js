import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Shelf from './Shelf';

class BookShelf extends Component {
    
    static propTypes = {
        onChange: PropTypes.func,
        booksShelf: PropTypes.array
    }

    state = {
        shelfTypes : [
            {type: 'currentlyReading', desc: 'Currently Reading'},
            {type: 'wantToRead', desc: 'Want to Read'},
            {type: 'read', desc: 'Read'}
        ]
    }

    render () {
        const { shelfTypes } = this.state;
        const { booksShelf } = this.props;
        return (
            <div className="bookshelf">
                {shelfTypes.map((shelfType, index) => (
                    <Shelf key={index} shelfType={shelfType} books={booksShelf}/>    
                ))}
            </div>
        )
    }

}

export default BookShelf
