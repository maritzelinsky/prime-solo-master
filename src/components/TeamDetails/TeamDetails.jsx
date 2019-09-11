import React, { Component } from 'react';
import { connect } from 'react-redux';

class TeamDetails extends Component {
    render() {
        return (
            <div>
                <h1>Team Details</h1>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    state
});

export default connect(mapStateToProps)(TeamDetails);