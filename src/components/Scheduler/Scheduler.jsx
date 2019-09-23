import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import './Scheduler.css';

import { withStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';


const styles = {
    select: {
        margin: '20px',
    }
}


class Scheduler extends Component {
    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_TEAMS' });
        this.props.dispatch({ type: 'FETCH_ASSIGNMENTS'});
    }

    state = {
        selectedTeam: {
            id: '',
            name:'',
        }
    }

    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({
            selectedTeam: {
                id: event.target.value
            }
        })
    }

    handleAssignTeamClick = (id) => {
        this.props.dispatch ({
            type: 'ASSIGN_TEAM',
            payload: {
                teamId: this.state.selectedTeam.id,
                timeSlotId: id
            }
        })
    }

    render () {
        return (
            <div class="container">
                <h2>Scheduler</h2>
                {/* <p>{JSON.stringify(this.props.state.schedulerReducer)}</p> */}
                <InputLabel htmlFor="age-simple">Selected Team</InputLabel>
                <Select value={this.state.selectedTeam.id} onChange={(event) => this.handleChange(event)}>
                {this.props.state.teamsReducer && this.props.state.teamsReducer.map(team => {
                    return (
                        <MenuItem value={team.id} key={team.name}>{team.name}</MenuItem>
                        )
                    })}
                </Select>
                <div>
                
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Date</TableCell>
                            <TableCell>Start Time</TableCell>
                            <TableCell>End Time</TableCell>
                            <TableCell>Assigned Team</TableCell>
                            <TableCell>ASSIGN</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.state.schedulerReducer.map(assignment => {
                            return (
                                <TableRow key={assignment.id}>
                                    <TableCell>{moment(assignment.date).format('MM/DD/YYYY')}</TableCell>
                                    <TableCell>{moment(assignment.start).format('LT')}</TableCell>
                                    <TableCell>{moment(assignment.end).format('LT')}</TableCell>
                                    <TableCell>{assignment.name}</TableCell>
                                    <TableCell><Button variant="outlined" color="inherit" onClick={() => this.handleAssignTeamClick(assignment.id)}>assign team</Button></TableCell> 
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    state
});

export default connect(mapStateToProps)(withStyles(styles)(Scheduler));