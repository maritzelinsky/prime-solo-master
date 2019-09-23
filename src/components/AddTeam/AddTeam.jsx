import React, {Component} from 'react';
import {connect} from 'react-redux';

import './AddTeam.css';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
            <div class="container">
            <h2>Add Team</h2>
                {/* <lable>team name</lable><input type="text" onChange={(event) => this.handleChange('name', event)} />
                <lable>contact</lable><input type="text" onChange={(event) => this.handleChange('contact', event)} />
                <lable>email</lable><input type="text" onChange={(event) => this.handleChange('email', event)} />
                <lable>phone number</lable><input type="number"  onChange={(event) => this.handleChange('phoneNumber', event)} /> */}
            
            <TextField
                label="Team Name"
                onChange={(event) => this.handleChange('name', event)}
                >
            </TextField>
            <TextField
                label="Contact"
                onChange={(event) => this.handleChange('contact', event)}
            />
            <TextField
                label="Email"
                onChange={(event) => this.handleChange('email', event)}
            />
            <TextField
                label="Phone Number"
                type="number"
                onChange={(event) => this.handleChange('phone_number', event)}
            />
           

            <Button className="button" variant="outlined" color="inherit" onClick={this.handleAddTeamClick}>add team</Button>
            
            </div>
        )
    }
}

const mapStateToProps = state => ({
    state
});

export default connect(mapStateToProps)(AddTeam);