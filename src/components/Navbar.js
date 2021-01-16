import React from 'react'
import {connect} from 'react-redux'
import {resetTodo} from '../store/actions'
import {makeStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import Box from '@material-ui/core/Box'
import Menu from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined'
import Button from '@material-ui/core/Button'
import PropTypes from "prop-types";

const Navbar = ({ resetTodo }) => {
    const classes = useStyles()
    return (
        <Box mb={2}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <Menu/>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Yapılacaklar Listesi
                    </Typography>
                    <Button color={'inherit'} startIcon={<DeleteOutlineOutlinedIcon/>} onClick={() => resetTodo()}>
                        TEMİZLE
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

Navbar.propTypes = {
    resetTodo: PropTypes.any
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    }
}))

export default connect(null, {resetTodo})(Navbar)
