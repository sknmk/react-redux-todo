import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import List from './components/List'
import NewTodo from './components/NewTodo'
import Login from './components/Login'
import Container from '@material-ui/core/Container'

const App = () => {
    return (
        <Router>
            <Container maxWidth="sm">
                <Switch>
                    <Route exact path="/dashboard">
                        <Navbar/>
                        <NewTodo/>
                        <List/>
                    </Route>
                    <Route path="/">
                        <Login/>
                    </Route>
                </Switch>
            </Container>
        </Router>
    )
}

export default App
