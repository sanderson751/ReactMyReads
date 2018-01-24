import React from 'react'
import './App.css'
import AddBookToLibrary from './components/AddBookToLibrary';
import BookShelf from './components/BookShelf';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
        <Route path='/search' render={() => (
          <AddBookToLibrary />
        )}/>
        <Route exact path='/' render={({ history }) => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <BookShelf onChange={ this.handleShelfsChange }/>  
            </div>
            <div className="open-search">
            <Link
              to='/search'
              className='add-contact'
            >Add a book</Link>
            </div>
          </div>
        )}/>
      </div>
    )
  }
}

export default BooksApp
