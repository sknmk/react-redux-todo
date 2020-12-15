import React from 'react'
import Navbar from './components/Navbar'
import List from './components/List'
import Container from '@material-ui/core/Container'
import NewTodo from "./components/NewTodo"

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [
                {id: 1, description: 'Uygulamayı başlat.', completed: true},
            ]
        }
        this.handleCheckbox = this.handleCheckbox.bind(this)
        this.handleInput = this.handleInput.bind(this)
    }

    handleCheckbox(id) {
        const i = this.state.todos.findIndex(t => t.id === id)
        const todos = this.state.todos
        todos[i].completed = !todos[i].completed
        this.setState({todos: todos})
    }

    handleInput(val) {
        const todos = this.state.todos
        todos.unshift({
            id: (todos.length + 1),
            description: val,
            completed: false
        })
        this.setState({todos: todos})
    }

    render() {
        return (
            <Container maxWidth="sm">
                <Navbar/>
                <NewTodo newItem={this.handleInput}/>
                <List todos={this.state.todos} onStatusChange={this.handleCheckbox}/>
            </Container>
        )
    }
}
