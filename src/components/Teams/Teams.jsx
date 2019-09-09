import React, { Component } from 'react';
import { connect } from 'react-redux';

class Teams extends Component {
    render () {
        return (
            <h1>Teams</h1>
        )
    }
}

export default connect()(Teams);