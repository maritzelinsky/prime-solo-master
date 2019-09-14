import React, {Component} from 'react';
import {connect} from 'react-redux';

class AddTeam extends Component {
    state = {
        newTeamDetails: {
            name: '',
            contact: '',
            email: '',
            phoneNumber: ''
        }
    }

    handleChange = (propertyName, event) => {
        this.setState({
            newTeamDetails: {
                ...this.state.newTeamDetails,
                [propertyName]: event.target.value,
            }
        })
    }

    handleAddTeamClick = (event, id) => {
        event.preventDefault();
        this.props.dispatch({
            type: 'ADD_TEAM',
            payload: this.state.newTeamDetails
        })
        this.setState({
            newTeamDetails: {
                name: '',
                contact: '',
                email: '',
                phoneNumber: ''
            }
        });
        this.props.history.push(`/teams`);
        console.log('in add team', this.state)
    }

    render () {
        return (
            <div>
            <h1>Add Team</h1>
                <lable>team name</lable><input type="text" onChange={(event) => this.handleChange('name', event)} />
                <lable>contact</lable><input type="text" onChange={(event) => this.handleChange('contact', event)} />
                <lable>email</lable><input type="text" onChange={(event) => this.handleChange('email', event)} />
                <lable>phone number</lable><input type="number"  onChange={(event) => this.handleChange('phoneNumber', event)} />
            <button onClick={this.handleAddTeamClick}>add team</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    state
});

export default connect(mapStateToProps)(AddTeam);