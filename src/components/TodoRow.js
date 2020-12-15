import React from 'react'
import {withStyles} from '@material-ui/core/styles'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import Checkbox from '@material-ui/core/Checkbox'

class TodoRow extends React.Component {
    constructor(props) {
        super(props);
        this.handleCheckbox = this.handleCheckbox.bind(this);
    }

    handleCheckbox(id) {
        this.props.onStatusChange(id)
    }

    render() {
        const {classes} = this.props
        return (
            <TableRow key={this.props.id}>
                <TableCell component="th" scope="row" width={20}>
                    {
                        this.props.isCompleted
                            ? <Checkbox checked={this.props.isCompleted} onChange={() => {this.handleCheckbox(this.props.id)}} color="primary"/>
                            : <Checkbox checked={this.props.isCompleted} onChange={() => {this.handleCheckbox(this.props.id)}}/>
                    }
                </TableCell>
                <TableCell>
                    {
                        this.props.isCompleted
                            ? <i className={classes.strike}>{this.props.label}</i>
                            : <span>{this.props.label}</span>
                    }
                </TableCell>
            </TableRow>
        )
    }
}

const useStyles = () => ({
    strike: {
        textDecoration: 'line-through'
    },
    success: {
        color: '#4caf50'
    }
})

export default withStyles(useStyles, {withTheme: true})(TodoRow)
