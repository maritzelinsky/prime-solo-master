import React, { Component } from 'react';
import { connect } from 'react-redux';


import './EditTeamDetails.css';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = {
    button: {
        margin: '20px',
    }
}

class EditTeamDetails extends Component {
    // componentDidMount = (id) => {
    //     this.props.dispatch({
    //         type: 'FETCH_DETAILS',
    //         payload: this.props.match.params.id
    //     })
    //     console.log('team details mount', this.props.match.params.id)
    // }


    handleSaveClick = () => {
        this.props.dispatch({
            type: 'UPDATE_TEAM_DETAILS',
            payload: this.props.state.editTeamDetailsReducer
        });
        this.props.history.push(`/teams`);
    }
    
    handleCancelClick = (id) => {
        this.props.history.push(`/details/${id}`);
    }


    // handleChange = (propertyName, event) => {
    //     this.setState({
    //         updatedDetails: {
    //             ...this.state.editDetails,
    //             [propertyName]: event.target.value,
    //         }
    //     })
    // }



    render() {
        console.log('NAME IN EDIT TEAM DETAILS', this.props.state.editTeamDetailsReducer);
        return (
            <div class="container">
                {/* <table>
                    <thead>
                        <tr>
                            <th>Edit Team Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <td>
                            <tr>
                                <input value={this.props.state.editTeamDetailsReducer.name} onChange={(event) => 
                                    this.props.dispatch({
                                        type: 'EDIT_DETAIL_NAME', 
                                        payload: event.target.value
                                        })
                                    }
                                />
                            </tr>
                            <tr>
                                <input value={this.props.state.editTeamDetailsReducer.contact} onChange={(event) =>
                                    this.props.dispatch({
                                        type: 'EDIT_DETAIL_CONTACT',
                                        payload: event.target.value
                                    })
                                }
                                />
                            </tr>
                            <tr>
                                <input value={this.props.state.editTeamDetailsReducer.email} onChange={(event) =>
                                    this.props.dispatch({
                                        type: 'EDIT_DETAIL_EMAIL',
                                        payload: event.target.value
                                    })
                                }
                                />
                            </tr>
                            <tr>
                                <input value={this.props.state.editTeamDetailsReducer.phone_number} onChange={(event) =>
                                    this.props.dispatch({
                                        type: 'EDIT_DETAIL_PHONE_NUMBER',
                                        payload: event.target.value
                                    })
                                }
                                />
                            </tr>
                            {/* <tr><input value={this.props.state.teamDetailsReducer.email} /></tr>
                            <tr><input value={this.props.state.teamDetailsReducer.phone_number} onChange={(event) => this.handleChange('phone_number', event)}/></tr> */}
                            {/* <button onClick={this.handleSaveClick}>save</button>
                            <button onClick={this.handleCancelClick}>cancel</button>
                        </td>
                    </tbody>
                </table>
            <div> */} 

            {/* </div> */}
                <TextField
                    label="Team"
                    value={this.props.state.editTeamDetailsReducer.name}
                    onChange={(event) =>
                        this.props.dispatch({
                            type: 'EDIT_DETAIL_NAME',
                            payload: event.target.value
                        })
                    }
                    margin="normal"
                />
                <TextField
                    label="Contact"
                    value={this.props.state.editTeamDetailsReducer.contact}
                    onChange={(event) =>
                        this.props.dispatch({
                            type: 'EDIT_DETAIL_CONTACT',
                            payload: event.target.value
                        })
                    }
                    margin="normal"
                />
                <TextField
                    label="Email"
                    value={this.props.state.editTeamDetailsReducer.email}
                    onChange={(event) =>
                        this.props.dispatch({
                            type: 'EDIT_DETAIL_EMAIL',
                            payload: event.target.value
                        })
                    }
                    margin="normal"
                />
                <TextField
                    label="Phone Number"
                    value={this.props.state.editTeamDetailsReducer.phone_number}
                    onChange={(event) =>
                        this.props.dispatch({
                            type: 'EDIT_DETAIL_PHONE_NUMBER',
                            payload: event.target.value
                        })
                    }
                    margin="normal"
                />
                <br></br>
                <Button variant="outlined" color="inherit" onClick={this.handleSaveClick}>save</Button>
                <Button className="button" variant="outlined" color="inherit" onClick={this.handleCancelClick}>cancel</Button>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    state
});

export default connect(mapStateToProps)(withStyles(styles)(EditTeamDetails));