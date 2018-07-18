import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Person.css'
import WithClass from '../../../hoc/WithClass'

class Person extends Component {
    constructor(props) {
        super(props);
        console.log('[Person.js] Inside constructor', props);
    }
    componentWillMount() {
        console.log('[Person.js] Inside componentWillMount()');
    }
    componentDidMount() {
        console.log('[Person.js] Inside componentDidMount()');
        if (this.props.position === 0) {
            this.inputElement.focus();
        }
    }

    render() {
        console.log('[Person.js] Inside render()');
        return (
            <WithClass classes={classes.Person}>
                <p onClick={this.props.click}>I'm {this.props.name} and my age is {this.props.age}!</p>
                <p>{this.props.children}</p>
                <input type="text"
                    ref={(inp) => { this.inputElement = inp }}
                    onChange={this.props.changed}
                    value={this.props.name} />
            </WithClass>
        )
    }


}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func,
}

export default Person;