import React, { Component } from 'react';
import { connect } from 'react-redux';

class Teams extends Component {
    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_TEAMS' })
    }
    render () {
        return (
            <h1>Teams</h1>
            
        )
    }
}

const mapStateToProps = state => ({
    state
});

export default connect(mapStateToProps)(Teams);