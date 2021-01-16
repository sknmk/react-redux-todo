import React from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../store/actions'
import {makeStyles} from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import SendOutlinedIcon from '@material-ui/icons/SendOutlined'
import CloseIcon from '@material-ui/icons/Close'
import PropTypes from 'prop-types'

const NewTodo = ({ addTodo }) => {
    const classes = useStyles()
    const [input, setInput] = React.useState('')
    const submit = () => {
        if (input.length < 2) {
            return false
        }
        addTodo(input)
        handleReset()
    }
    const handleInput = (e) => {
        if (e.key === 'Enter') {
            submit()
        }
    }
    const handleReset = () => {
        setInput('')
    }

    return (
        <Box mb={2}>
            <Paper className={classes.root} elevation={3}>
                <InputBase className={classes.input} placeholder='Yeni bir iş girin.' value={input}
                           onChange={e => setInput(e.target.value)} onKeyDown={handleInput} fullWidth={true}/>
                <IconButton className={classes.iconButton} onClick={handleReset}>
                    <CloseIcon/>
                </IconButton>
                <Divider className={classes.divider} orientation='vertical'/>
                <IconButton className={classes.iconButton} onClick={submit}>
                    <SendOutlinedIcon/>
                </IconButton>
            </Paper>
        </Box>
    )
}

NewTodo.propTypes = {
    addTodo: PropTypes.any
}

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}))

export default connect(null, {addTodo})(NewTodo)
