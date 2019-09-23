import React, {Component} from 'react';
import {connect} from 'react-redux';
import moment from  'moment';

import './TimeSlots.css';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';






class TimeSlots extends Component {
    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_TIME_SLOTS'})
    }
    
    state = {
        newTimeSlot: {
            date: '',
            start_time: '',
            end_time: '',
        }
    }

    handleChange = (propertyName, event) => {
        this.setState({
            newTimeSlot: {
                ...this.state.newTimeSlot,
                [propertyName]: event.target.value,
            }
        })
        console.log(this.state);
    }

    handleAddTimeSlotClick = (event) => {
        event.preventDefault();
        this.props.dispatch({
            type: 'ADD_TIME_SLOT',
            payload: this.state.newTimeSlot
        })
        this.setState({
            newTimeSlot: {
                date: '',
                start_time: '',
                end_time: '',
            }
        })
    }

    // handleEditTimeSlotClick = () => {
    //     this.props.dispatch({
    //         type: 'TIME_SLOT_TO_EDIT',

    //     })
    // }

    handleDeleteTimeSlotClick = (id) => {
        this.props.dispatch({
            type: 'DELETE_TIME_SLOT',
            payload: id
        })
    }

    render() {
        return (
            <div class='container'>
            <h2>Time Slots</h2>
            {/* <input type="date" placeholder="date" onChange={(event) => this.handleChange('date', event)}/>
            <input type= "time" placeholder="start time" onChange={(event) => this.handleChange('start_time', event)}/>
            <input type="time" placeholder="end time" onChange={(event) => this.handleChange('end_time', event)}/>
            <button onClick={this.handleAddTimeSlotClick}>Add Time Slot</button> */}
                <TextField
                    type= "date"
                    onChange={(event) => this.handleChange('date', event)}
                    helperText="Date"
                >
                </TextField>
                <TextField
                    type="time"
                    onChange={(event) => this.handleChange('start_time', event)}
                    helperText="Start Time"
                >
                </TextField>
                <TextField
                    type="time"
                    onChange={(event) => this.handleChange('end_time', event)}
                    helperText="End Time"
                >
                </TextField>
                <br></br>
                <br></br>
                <div>
                    <Button variant="outlined" color="inherit" onClick={this.handleAddTimeSlotClick}>Add Time Slot</Button>
                </div>
                <br></br>
                <br></br>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Start Time</TableCell>
                        <TableCell>End Time</TableCell>
                        <TableCell>Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                        {this.props.state.timeSlotsReducer.map(timeSlot => {
                            console.log('timeslot', timeSlot)
                            return (
                                <TableRow key={timeSlot.time}>
                                    <TableCell>{moment(timeSlot.date).format('MM/DD/YYYY')}</TableCell>
                                    <TableCell>{moment(timeSlot.start).format('HH:MM A')}</TableCell>
                                    <TableCell>{moment(timeSlot.end).format('HH:MM A')}</TableCell>
                                    <TableCell><Button variant="outlined" color="inherit" onClick={() => this.handleDeleteTimeSlotClick(timeSlot.id)}>delete</Button></TableCell>
                                    {/* <td><button onClick={() => this.handleEditTimeSlotClick(timeSlot.id)}>edit</button></td> */}
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
export default connect(mapStateToProps)(TimeSlots);