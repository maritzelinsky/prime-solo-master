import React, { Component } from 'react';
import { connect } from 'react-redux';

class TeamDetails extends Component {
    componentDidMount = (id) => {
        this.props.dispatch({
            type: 'FETCH_DETAILS',
            payload: this.props.match.params.id
        })
        console.log('team details mount', this.props.match.params.id)
    }

    render() {
        return (
            <div>
                <h1>Team Details</h1>
                <p>{JSON.stringify(this.props.state.teamDetailsReducer)}</p>
                <table>
                    <thead>
                        <tr>
                            <th>Team <button>Edit</button></th> 
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.state.teamsReducer && this.props.state.teamDetailsReducer.map(team => {
                            return (
                                <td key={team.details}>
                                <tr>{team.name}</tr>
                                <tr>{team.contact}</tr>
                                <tr>{team.email}</tr>
                                <tr>{team.phone_number}</tr>
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