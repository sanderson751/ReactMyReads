import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
                    <Link className='close-search' to='/'>Close</Link>
                    <div className="search-books-input-wrapper">
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
