import React from 'react'
import Container from './components/Container'
import './style.css'
import { inject, observer } from 'mobx-react'
import { ExampleData } from './store/Example'

@inject('ContainerStore')
@observer
class App extends React.Component {

    state = {
        n: 1,
        value: ''
    }

    render () {
        const { ContainerStore } = this.props
        const container = ContainerStore.regularData.map((data, index) => {
            return <Container n = { ContainerStore.count } ContainerStore = { ContainerStore } key = { index } items = { data.items } />
        })
        return (
            <div className = 'main'>
                <form className = 'result result_build' onSubmit = { this.build }>
                    <div className = "result__body">
                        <textarea value = { this.state.value } onChange={this.handleChange}></textarea>
                        <button>Build</button>
                    </div>
                    <div className = 'result__example'>
                        <p>Example:</p>
                        <small>{ JSON.stringify(ExampleData, null, 4) }</small>
                    </div>
                </form>
                { container }
            </div>
        )
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    build = (e) => {
        e.preventDefault()
        this.props.ContainerStore.render(this.state.value)
    }
}

export default App