import React, { Component } from 'react';
import { connect } from 'react-redux';



class EditTeamDetails extends Component {
    
    state = {
        editDetails: {
            name: this.props.state.name,
            contact: this.props.state.contact,
            email: this.props.state.email,
            phone_number: this.props.state.email_number
        }
    }

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

    handleChange = (propertyName, event) => {
        this.setState({
            editDetails: {
                ...this.state.editDetails,
                [propertyName]: event.target.value,
            }
        })
    }

    render() {
        console.log('NAME IN EDIT TEAM DETAILS', this.props.state.name);
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
                                    <tr><input value={team.name} onChange={(event) => this.handleChange('name', event)}/></tr>
                                    <tr><input value={team.contact} onChange={(event) => this.handleChange('contact', event)}/></tr>
                                    <tr><input value={team.email} onChange={(event) => this.handleChange('email', event)}/></tr>
                                    <tr><input value={team.phone_number} onChange={(event) => this.handleChange('phone_number', event)}/></tr>
                                    <button>save</button>
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