import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Toolbar from "@material-ui/core/Toolbar"
import Box from "@material-ui/core/Box"
import Menu from '@material-ui/icons/Menu'
import IconButton from "@material-ui/core/IconButton"

class Navbar extends React.Component {
    render () {
        const { classes } = this.props;
        return (
            <Box mb={2}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <Menu />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Yapılacaklar Listesi
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        )
    }
}

const useStyles = theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
})

export default withStyles(useStyles, { withTheme: true })(Navbar);
