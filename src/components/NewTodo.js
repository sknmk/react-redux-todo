import React from 'react'
import TextField from "@material-ui/core/TextField"
import Box from "@material-ui/core/Box"

class NewTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
        this.handleInput = this.handleInput.bind(this)
        this.handleState = this.handleState.bind(this)
    }

    handleInput(e) {
        if (e.key === 'Enter') {
            this.props.newItem(e.target.value)
            this.setState({
                input: ''
            })
        }
    }

    handleState(e) {
        this.setState({
            input: e.target.value
        })
    }

    render() {
        return (
            <Box pb={2}>
                <TextField fullWidth label="Yeni bir iş girin." variant="outlined" value={this.state.input}
                           onChange={this.handleState} onKeyDown={this.handleInput}/>
            </Box>
        )
    }
}

export default NewTodo
