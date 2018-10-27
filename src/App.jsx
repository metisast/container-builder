import React from 'react'
import Container from './components/Container'
import './style.css'
import { inject, observer } from 'mobx-react'

@inject('TestStore')
@observer
class App extends React.Component {

    state = {
        n: 1
    }

    render () {
        const { TestStore } = this.props
        return (
            <div className = 'main'>
            <h1>{ TestStore.count }</h1>
                <Container n = { TestStore.count } TestStore = { TestStore } />
            </div>
        )
    }
}

export default App