import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Select extends Component {
    
    static propTypes = {
        optionSelected: PropTypes.string,
        onChange: PropTypes.func
    }

    state = {
        options : [
            {type: 'none', desc: 'Move to...'},
            {type: 'currentlyReading', desc: 'Currently Reading'},
            {type: 'wantToRead', desc: 'Want to Read'},
            {type: 'read', desc: 'Read'},
            {type: 'none', desc: 'None'}
        ]
    }

    handleChange = (value) => {
        const { onChange } = this.props;
        if (onChange) {
            onChange.call(this, value.target.value);
        }
    }

    render () {
        const { options } = this.state;
        const { optionSelected } = this.props;
        return (
            <select value={optionSelected} onChange={this.handleChange}>
                {options.map( (option, index) => (
                   <option key={index} value={option.type} disabled={index === 0}>{option.desc}</option>    
                ))}
            </select>
        )
    }

}

export default Select
