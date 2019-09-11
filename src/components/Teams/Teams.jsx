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
                    </tr>
                </thead>
                <tbody>
                    <td>
                        {/* {this.props.state.teamsReducer && this.props.state.teamsReducer.map(team => <td key={team.name}>{team.name}</td>)} */}
                        {this.props.state.teamsReducer && this.props.state.teamsReducer.map(team => {
                            return (
                                <tr key={team.name}>{team.name}<button onClick={() => this.handleDetailsClick(team.id)}>more details</button></tr>
                            )
                        })}
                    </td>
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