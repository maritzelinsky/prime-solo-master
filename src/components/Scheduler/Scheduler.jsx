import React, { Component } from 'react';
import { connect } from 'react-redux';

class Scheduler extends Component {
    render () {
        return (
            <div>
                <h1>Scheduler</h1>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    state
});

export default connect(mapStateToProps)(Scheduler);