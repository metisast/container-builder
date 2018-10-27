import React from 'react'
import Container from './components/Container'
import './style.css'

class App extends React.Component {

    state = {
        n: 1
    }

    render () {
        return (
            <div className = 'main'>
                <Container n = { this.state.n } onCreateComponent = { this.createContainer } />
            </div>
        )
    }

    createContainer = () => {
        this.setState((state, props) => ({
            n: state.n + 1
        }))
    }
}

export default App