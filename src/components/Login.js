import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import {connect} from 'react-redux'
import store from '../store/store'
import {session, sessionReset} from '../store/actions'
import {makeStyles} from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import {Alert, AlertTitle} from '@material-ui/lab'
import CircularProgress from "@material-ui/core/CircularProgress"

const Login = ({session, sessionReset}) => {
    const classes = useStyles()
    const [loading, setLoading] = React.useState(false)
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [error, setError] = React.useState([])
    React.useEffect(() => {
        const token = store.getState().session.userDetails.token
        const expiresAt = store.getState().session.userDetails.expiresAt
        if (token && Date.parse(expiresAt) > Date.now()) {
            window.location.href = '/dashboard'
        } else {
            sessionReset()
        }
    });
    const submit = () => {
        setLoading(true)
        axios.post('http://127.0.0.1:8000/api/user/login', {email, password})
            .then(res => {
                setLoading(false)
                if (res.status === 200) {
                    const userDetails = {
                        token: res.data.message.token,
                        expiresAt: res.data.message.expires_at,
                        details: res.data.message.details
                    }
                    session(userDetails)
                    window.location.href = '/dashboard'
                } else {
                    setError([{id: 400, description: 'Kullanıcı adı veya şifre hatalı.'}])
                    setPassword('')
                }
            })
            .catch(res => {
                setLoading(false)
                setError([{id: 500, description: 'Test sunucusuna bağlanılamadı, yine de devam ediliyor.'}])
                setTimeout(() => {
                    const userDetails = {
                        token: "TEST_TOKEN",
                        expiresAt: "TEST_DATE",
                        details: "NO_DETAIL"
                    }
                    session(userDetails)
                    window.location.href = '/dashboard'
                }, 1500)
            })
    }

    return (
        <Box className={classes.root}>
            <Container component='main' maxWidth='xs'>
                <CssBaseline/>
                <Paper>
                    <Box px={2} py={3} className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon/>
                        </Avatar>
                        <Typography component='h1' variant='h5'>
                            Oturum Aç
                        </Typography>
                        <form className={classes.form} noValidate>
                            <TextField
                                variant='outlined'
                                margin='normal'
                                required
                                fullWidth
                                id='email'
                                label='Email'
                                name='email'
                                autoComplete='email'
                                autoFocus
                                onChange={e => setEmail(e.target.value)}
                            />
                            <TextField
                                variant='outlined'
                                margin='normal'
                                required
                                fullWidth
                                name='password'
                                label='Şifre'
                                type='password'
                                id='password'
                                autoComplete='current-password'
                                onChange={e => setPassword(e.target.value)}
                            />
                            <Button
                                fullWidth
                                variant='contained'
                                size={'large'}
                                color='primary'
                                disabled={loading || password.length < 4 || email.length < 4}
                                className={classes.submit}
                                onClick={submit}
                            >
                                {
                                    loading && <CircularProgress color={'inherit'} size={26}/>
                                }
                                {
                                    (!loading && error.length > 0) && <span>YENİDEN DENE</span>
                                }
                                {
                                    (!loading && !error.length) && <span>GİRİŞ</span>
                                }
                            </Button>
                        </form>
                        {
                            error.map((item) => (
                                <Box width={1} key={item.id} mb={2}>
                                    <Alert severity="error">
                                        <AlertTitle>Hata</AlertTitle>
                                        {item.description}
                                    </Alert>
                                </Box>
                            ))
                        }
                    </Box>
                </Paper>
                <Box mt={8}>
                    <Typography variant='body2' color='textSecondary' align='center'>
                        {'Her hakkı saklıdır. © '}
                        {' '}
                        {new Date().getFullYear()}
                        {'.'}
                    </Typography>
                </Box>
            </Container>
        </Box>
    )
}

Login.propTypes = {
    session: PropTypes.any,
    sessionReset: PropTypes.any
}

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'absolute', top: '50%', transform: 'translateY(-50%)'
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}))

export default connect(null, {session, sessionReset})(Login)


