import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Teams.css';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

class Teams extends Component {
    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_TEAMS' })
    }
    
    handleDetailsClick = (id) => {
        this.props.history.push(`/details/${id}`);
    }

    handleAddTeamClick = () => {
        this.props.history.push('/addteam')
    }
    
    render () {
        return (
            <div class="container">
                <h2>Teams</h2>
                <Button variant="outlined" color="inherit" onClick={this.handleAddTeamClick}>add team</Button>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Team</TableCell>
                        <TableCell>More</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                        {this.props.state.teamsReducer && this.props.state.teamsReducer.map(team => {
                            return (
                                <TableRow key ={team.name}>
                                <TableCell>{team.name}</TableCell>
                                    <TableCell><Button variant="outlined" color="inherit" onClick={() => this.handleDetailsClick(team.id)}>more details</Button></TableCell>
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

export default connect(mapStateToProps)(Teams);



