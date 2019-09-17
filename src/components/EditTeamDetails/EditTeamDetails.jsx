import React, { Component } from 'react';
import { connect } from 'react-redux';

class EditTeamDetails extends Component {

    componentDidMount = (id) => {
        this.props.dispatch({
            type: 'FETCH_DETAILS',
            payload: this.props.match.params.id
        })
        console.log('team details mount', this.props.match.params.id)
    }

    
    handleCancelClick = (id) => {
        this.props.history.push(`/details/${id}`);
    }


    handleChange = (propertyName, event) => {
        this.setState({
            updatedDetails: {
                ...this.state.editDetails,
                [propertyName]: event.target.value,
            }
        })
    }

    render() {
        console.log('NAME IN EDIT TEAM DETAILS', this.props.state.teamDetailsReducer.name);
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Edit Team Details</th>
                        </tr>
                    </thead>
                    <tbody>
                                <td>
                                    {/* <tr>DISPATCH EACH ITEM TO EDIT DETAILS REDUCER WITH THEIR OWN CASE</tr> */}
                                    
                                    {/* <tr><input value={this.props.state.teamDetailsReducer.contact} onChange={(event) => this.handleChange('contact', event)}/></tr>
                                    <tr><input value={this.props.state.teamDetailsReducer.email} onChange={(event) => this.handleChange('email', event)}/></tr>
                                    <tr><input value={this.props.state.teamDetailsReducer.phone_number} onChange={(event) => this.handleChange('phone_number', event)}/></tr> */}
                                    <button onClick={this.handleSaveClick}>save</button>
                                    <button onClick={this.handleCancelClick}>cancel</button>
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

export default connect(mapStateToProps)(EditTeamDetails);