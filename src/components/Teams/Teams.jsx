import React, { Component } from 'react';
import { connect } from 'react-redux';

class Teams extends Component {
    handleDetailsClick = (id) => {
        this.props.history.push(`/details/${id}`);
    }
    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_TEAMS' })
    }
    render () {
        return (
            <div>
            <h1>Teams</h1>
            <table>
                <thead>
                    <tr>
                        <th>Team</th>
                        <th>Contact</th>
                        <th>Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                            {this.props.state.teamsReducer && this.props.state.teamsReducer.map(team => <td key={team.name}>{team.name}</td>)}
                            {this.props.state.teamsReducer && this.props.state.teamsReducer.map(team => <td key={team.contact}>{team.contact}</td>)}
                            {this.props.state.teamsReducer && this.props.state.teamsReducer.map(team => <td key={team.phone_number}>{team.phone_number}</td>)}
                            
                    </tr>
                </tbody>
            </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    state
});

export default connect(mapStateToProps)(Teams);