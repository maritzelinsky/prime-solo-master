import React, { Component } from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import MoreIcon from '@material-ui/icons/More';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles(theme => ({
//     root: {
//         width: '100%',
//     },
//     paper: {
//         marginTop: theme.spacing(3),
//         width: '100%',
//         overflowX: 'auto',
//         marginBottom: theme.spacing(2),
//     },
//     table: {
//         minWidth: 650,
//     },
// }));

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
            <div>
                <Typography variant="h4" component="h2" gutterBottom>Teams</Typography>
                <MoreHorizIcon/>
                <MoreIcon/>
                <div>
                    <Paper>
                        <Table size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Teams</TableCell>
                                    <TableCell align="right">More Details</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.props.state.teamsReducer && this.props.state.teamsReducer.map(team => {
                                    return (
                                    <TableRow key={team.name}>
                                        <TableCell component="th" scope="row">
                                            {team.name}
                                        </TableCell>
                                            <TableCell align="left"><MoreHorizIcon onClick={() => this.handleDetailsClick(team.id)}>More Details</MoreHorizIcon></TableCell>
                                      
                                    </TableRow>
                                    )
                                })}
                        
                            </TableBody>
                        </Table>
                    </Paper>
                    <Button onClick={this.handleAddTeamClick}>add team</Button>
                </div>
            <table>
                <thead>
                    <tr>
                        <th>Team</th>
                    </tr>
                </thead>
                <tbody>
                        {this.props.state.teamsReducer && this.props.state.teamsReducer.map(team => {
                            return (
                                <tr key={team.name}>{team.name}<button onClick={() => this.handleDetailsClick(team.id)}>more details</button></tr>
                            )
                        })}
                </tbody>
            </table>
            <button onClick={this.handleAddTeamClick}>add team</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    state
});

export default connect(mapStateToProps)(Teams);