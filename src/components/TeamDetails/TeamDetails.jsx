import React, { Component } from 'react';
import { connect } from 'react-redux';

class TeamDetails extends Component {
    componentDidMount = () => {
        this.props.dispatch({
            type: 'FETCH_DETAILS',
            payload: this.props.match.params.id
        })
        console.log('team edit details mount', this.props.match.params.id)
    }

    handleEditClick = (id) =>  {
        this.props.dispatch({
            type: 'TEAM_DETAILS_TO_EDIT',
            payload: this.props.state.teamDetailsReducer[0]
        })
        this.props.history.push(`/edit/${id}`);
    }

    handleDeleteClick = (id) => {
        this.props.dispatch({
            type: 'DELETE_TEAM',
            payload: this.props.match.params.id
        })
    }

    handleBackToTeamsClick = () => {
        this.props.history.push(`/teams`);
    }

    render() {
        return (
            <div>
                <h1>Team Details</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Team</th> 
                            <th>Contact</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.state.teamsReducer && this.props.state.teamDetailsReducer.map(team => {
                            console.log("TEAM IN TEAM DETAILS", team);
                            return (
                                <tr key={team.details}>
                                    <td>{team.name}</td>
                                    <td>{team.contact}</td>
                                    <td>{team.email}</td>
                                    <td>{team.phone_number}</td>
                                    <button onClick={() => this.handleEditClick(team.id)}>edit</button>
                                    <button onClick={() => this.handleDeleteClick(team.id)}>delete</button>
                                    <button onClick={this.handleBackToTeamsClick}>back to teams</button>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    state
});

export default connect(mapStateToProps)(TeamDetails);