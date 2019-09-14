import React, {Component} from 'react';
import {connect} from 'react-redux';

class TimeSlots extends Component {
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
            type: 'ADD_TIME_SLOTS',
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

    render() {
        return (
            <div>
            <h1>Time Slots</h1>
            <input placeholder="date" onChange={(event) => this.handleChange('date', event)}/>
            <input placeholder="start time" onChange={(event) => this.handleChange('start_time', event)}/>
            <input placeholder="end time" onChange={(event) => this.handleChange('end_time', event)}/>
            <button onClick={this.handleAddTimeSlotClick}>Add Time Slot</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    state
});
export default connect(mapStateToProps)(TimeSlots);