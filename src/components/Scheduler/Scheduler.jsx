import React, { Component } from 'react';
import { connect } from 'react-redux';

class Scheduler extends Component {
    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_TEAMS' });
        this.props.dispatch({ type: 'FETCH_ASSIGNMENTS'});
    }

    state = {
        selectedTeam: {
            id: ''
        }
    }

    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({
            selectedTeam: {
                id: event.target.value
            }
        })
    }

    handleAssignTeamClick = (id) => {
        this.props.dispatch ({
            type: 'ASSIGN_TEAM',
            payload: {
                teamId: this.state.selectedTeam.id,
                timeSlotId: id
            }
        })
    }

    render () {
        return (
            <div>
                <h1>Scheduler</h1>
                <p>{JSON.stringify(this.props.state.schedulerReducer)}</p>
                <select onChange={(event) => this.handleChange(event)}>
                {this.props.state.teamsReducer && this.props.state.teamsReducer.map(team => {
                    return (
                        <option value={team.id} key={team.name}>{team.name}</option>
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
                                <tr key={assignment.id}>
                                    <td>{assignment.date}</td>
                                    <td>{assignment.start_time}</td>
                                    <td>{assignment.end_time}</td>
                                    <td>{assignment.name}</td>
                                    <button onClick={() => this.handleAssignTeamClick(assignment.id)}>assign team</button>
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