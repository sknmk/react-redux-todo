import React from 'react'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableContainer from '@material-ui/core/TableContainer'
import TodoRow from "./TodoRow"

class List extends React.Component {
    constructor(props) {
        super(props);
        this.handleCheckbox = this.handleCheckbox.bind(this);
    }

    handleCheckbox(id) {
        this.props.onStatusChange(id);
    }

    render() {
        return (
            <Paper elevation={3}>
                <TableContainer>
                    <Table>
                        <TableBody>
                            {
                                this.props.todos.map((item) => (
                                    <TodoRow key={item.id} id={item.id} isCompleted={item.completed} label={item.description} onStatusChange={this.handleCheckbox}/>
                                ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        )
    }
}

export default List
