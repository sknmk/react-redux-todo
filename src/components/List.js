import React from 'react'
import PropTypes from 'prop-types'
import Todo from './TodoRow'
import {connect} from 'react-redux'
import {getTodosState} from '../store/selectors'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableContainer from '@material-ui/core/TableContainer'
import DoneAllOutlinedIcon from '@material-ui/icons/DoneAllOutlined'
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const TodoList = ({todos}) => (
    <Paper elevation={2}>
        {
            todos.length > 0 ?
                <TableContainer>
                    <Table>
                        <TableBody>
                            {todos.map((item) => (<Todo key={item.id} todo={item}/>))}
                        </TableBody>
                    </Table>
                </TableContainer>
                : <Box py={5}>
                    <Typography variant={'h6'} align={'center'}>
                        <DoneAllOutlinedIcon fontSize={'large'} color={'secondary'}/>
                        <br/>
                        Yapılacak iş yok.
                    </Typography>
                </Box>
        }
    </Paper>
)

TodoList.propTypes = {
    todos: PropTypes.any
};

const mapStateToProps = state => {
    const todos = getTodosState(state)
    return {todos}
}

export default connect(mapStateToProps)(TodoList)
