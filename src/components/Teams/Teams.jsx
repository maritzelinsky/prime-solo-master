import React, { Component } from 'react';
import { connect } from 'react-redux';

class Teams extends Component {
    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_TEAMS' })
    }
    render () {
        return (
            <div>
            <h1>Teams</h1>
            <p>{JSON.stringify(this.props.state.teamsReducer)}</p>
            <ul>
                {this.props.state.teamsReducer && this.props.state.teamsReducer.map(team => <li>{team.name}</li>)}
            </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    state
});

export default connect(mapStateToProps)(Teams);