import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import Checkbox from '@material-ui/core/Checkbox'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {toggleTodo} from '../store/actions'

const Todo = ({todo, toggleTodo}) => {
    const classes = useStyles()
    return (
        <TableRow key={todo.id} onClick={() => toggleTodo(todo.id)}>
            <TableCell component="th" scope="row" width={20}>
                {
                    todo.status === 1
                        ? <Checkbox checked={true} color="primary"/>
                        : <Checkbox checked={false}/>
                }
            </TableCell>
            <TableCell>
                    <span className={classes.pointer}>
                    {
                        todo.status === 1
                            ? <i className={classes.completed}>{todo.content}</i>
                            : todo.content
                    }
                    </span>
            </TableCell>
        </TableRow>
    )
}

Todo.propTypes = {
    props: PropTypes.any,
    todo: PropTypes.any,
    toggleTodo: PropTypes.any
}

const useStyles = makeStyles({
    completed: {
        textDecoration: 'line-through',
        color: '#929292'
    },
    pointer: {
        cursor: 'pointer'
    }
})

export default connect(null, {toggleTodo})(Todo)
