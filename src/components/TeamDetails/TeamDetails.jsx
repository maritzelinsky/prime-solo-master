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
        this.props.history.push(`/edit/${id}`);
    }

    handleDeleteClick = (id) => {
        this.props.dispatch({
            type: 'DELETE_TEAM',
            payload: this.props.match.params.id
        })
    }

    render() {
        return (
            <div>
                <h1>Team Details</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Team </th> 
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.state.teamsReducer && this.props.state.teamDetailsReducer.map(team => {
                            console.log("TEAM IN TEAM DETAILS", team);
                            return (
                                <td key={team.details}>
                                <tr>{team.name}</tr>
                                <tr>{team.contact}</tr>
                                <tr>{team.email}</tr>
                                <tr>{team.phone_number}</tr>
                                <button onClick={() => this.handleEditClick(team.id)}>edit</button>
                                <button onClick={() => this.handleDeleteClick(team.id)}>delete</button>
                                </td>
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