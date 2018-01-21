import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Search extends Component {

    static propTypes = {
        onSearch: PropTypes.func
    }

    state = {
        value: ''
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        }, () => {
            const { onSearch } = this.props;
            if (onSearch) {
                onSearch.call(this, this.state.value);
            }
        });
    }

    render () {
        const { value } = this.state;
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
                    <div className="search-books-input-wrapper">
                        {/*
                        NOTES: The search from BooksAPI is limited to a particular set of search terms.
                        You can find these search terms here:
                        https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                        However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                        you don't find a specific author or title. Every search is limited by search terms.
                        */}
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={value}
                            onChange={this.handleChange} />
                    </div>
                </div>
            </div>
        )
    }

}

export default Search
