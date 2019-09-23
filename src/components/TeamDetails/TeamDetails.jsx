import React, { Component } from 'react';
import { connect } from 'react-redux';

import './TeamDetails.css';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

class TeamDetails extends Component {
    componentDidMount = () => {
        this.props.dispatch({
            type: 'FETCH_DETAILS',
            payload: this.props.match.params.id
        })
        console.log('team edit details mount', this.props.match.params.id)
    }

    handleEditTeamClick = (id) =>  {
        this.props.dispatch({
            type: 'TEAM_DETAILS_TO_EDIT',
            payload: this.props.state.teamDetailsReducer[0]
        })
        this.props.history.push(`/edit/${id}`);
    }

    handleDeleteTeamClick = () => {
        this.props.dispatch({
            type: 'DELETE_TEAM',
            payload: this.props.match.params.id
        })
        this.props.history.push(`/teams`);
    }

    handleBackToTeamsClick = () => {
        this.props.history.push(`/teams`);
    }

    render() {
        
        return (
            <div class="container"> 
                <h2>Team Details</h2>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Team</TableCell> 
                            <TableCell>Contact</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Phone Number</TableCell>
                            <TableCell>Edit</TableCell>
                            <TableCell>Delete</TableCell>
                            <TableCell>Back</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.state.teamsReducer && this.props.state.teamDetailsReducer.map(team => {
                            console.log("TEAM IN TEAM DETAILS", team);
                            return (
                                <TableRow key={team.details}>
                                    <TableCell>{team.name}</TableCell>
                                    <TableCell>{team.contact}</TableCell>
                                    <TableCell>{team.email}</TableCell>
                                    <TableCell>{team.phone_number}</TableCell>
                                    <TableCell><Button variant="outlined" color="inherit" onClick={() => this.handleEditTeamClick(team.id)}>edit</Button></TableCell>
                                    <TableCell><Button variant="outlined" color="inherit" onClick={() => this.handleDeleteTeamClick(team.id)}>delete</Button></TableCell>
                                    <TableCell><Button variant="outlined" color="inherit" onClick={this.handleBackToTeamsClick}>back to teams</Button></TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    state
});

export default connect(mapStateToProps)(TeamDetails);