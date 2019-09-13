import React, { Component } from 'react';
import { connect } from 'react-redux';

class TeamDetails extends Component {
    render() {
        return (
            <div>
                <h1>Team Details</h1>
                <p>{JSON.stringify(this.props.state.teamDetailsReducer)}</p>
                {/* <table>
                    <thead>
                        <tr>
                            <th>Team</th>
                        </tr>
                    </thead>
                    <tbody key={team.details}>
                        {this.props.state.teamsReducer && this.props.state.teamDetailsReducer.map(team => {
                            return (
                                <tr>{team.name}</tr>
                                <tr>{team.contact}</tr>
                                <tr>{team.email}</tr>
                                <tr>{team.phone_number}</tr>
                            )
                        })}
                    </tbody>
                </table> */}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    state
});

export default connect(mapStateToProps)(TeamDetails);