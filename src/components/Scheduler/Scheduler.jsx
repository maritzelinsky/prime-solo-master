import React, { Component } from 'react';
import { connect } from 'react-redux';

class Scheduler extends Component {
    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_TEAMS' });
        this.props.dispatch({ type: 'FETCH_TIME_SLOTS' });
        this.props.dispatch({ type: 'FETCH_ASSIGNMENTS'});
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
                <div>
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Start Time</th>
                            <th>End Time</th>
                            <th>Assigned Team(s)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.state.schedulerReducer.map(assignment => {
                            return (
                                <tr key={assignment.assignments}>
                                    <td>{assignment.date}</td>
                                    <td>{assignment.start_time}</td>
                                    <td>{assignment.end_time}</td>
                                    <td>{assignment.name}</td>
                                    <button>assign team</button>
                                </tr>
                            )
                        })}
                    </tbody>
                </table> 
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    state
});

export default connect(mapStateToProps)(Scheduler);