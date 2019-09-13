import React, { Component } from 'react';
import { connect } from 'react-redux';

class EditTeamDetails extends Component {
    componentDidMount = (id) => {
        this.props.dispatch({
            type: 'FETCH_DETAILS_TO_EDIT',
            payload: this.props.match.params.id
        })
        console.log('team details mount', this.props.match.params.id)
    }

    handleCancelClick = (id) => {
        this.props.history.push(`/details/${id}`);
    }

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Edit Team Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.state.teamsReducer && this.props.state.teamDetailsReducer.map(team => {
                            return (
                                <td key={team.details}>
                                    <tr><input placeholder={team.name}/></tr>
                                    <tr><input placeholder={team.contact}/></tr>
                                    <tr><input placeholder={team.email}/></tr>
                                    <tr><input placeholder={team.phone_number}/></tr>
                                    <button>Save</button>
                                    <button onClick={() => this.handleCancelClick(team.id)}>cancel</button>
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

export default connect(mapStateToProps)(EditTeamDetails);