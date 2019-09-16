import React, { Component } from 'react';
import { connect } from 'react-redux';

class Scheduler extends Component {
    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_TEAMS' })
    }

    state = {
        selectedTeam: {
            name: ''
        }
    }

    handleChange(event) {
        console.log(event.target.value)
        this.setState({name: event.target.value});
    }

    render () {
        return (
            <div>
                <h1>Scheduler</h1>
                <select onChange={(event) => this.handleChange(event)}>
                {this.props.state.teamsReducer && this.props.state.teamsReducer.map(team => {
                    return (
                        <option key={team.name}>{team.name}</option>
                        )
                    })}
                </select>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    state
});

export default connect(mapStateToProps)(Scheduler);