import React, {Component} from 'react';
import {connect} from 'react-redux';

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
    }

    handleAddTimeSlotClick = (event, id) => {
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

    handleDeleteTimeSlotClick = (id) => {
        this.props.dispatch({
            type: 'DELETE_TIME_SLOT',
            payload: id
        })
    }

    render() {
        return (
            <div>
            <h1>Time Slots</h1>
            <input placeholder="date" onChange={(event) => this.handleChange('date', event)}/>
            <input placeholder="start time" onChange={(event) => this.handleChange('start_time', event)}/>
            <input placeholder="end time" onChange={(event) => this.handleChange('end_time', event)}/>
            <button onClick={this.handleAddTimeSlotClick}>Add Time Slot</button>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Start Time</th>
                        <th>End Time</th>
                    </tr>
                </thead>
                <tbody>
                        {this.props.state.timeSlotsReducer.map(timeSlot => {
                            return (
                                <tr key={timeSlot.time}>
                                    <td>{timeSlot.date}</td>
                                    <td>{timeSlot.start_time}</td>
                                    <td>{timeSlot.end_time}</td>
                                    <td><button onClick={() => this.handleDeleteTimeSlotClick(timeSlot.id)}>delete</button></td>
                                </tr>
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
export default connect(mapStateToProps)(TimeSlots);