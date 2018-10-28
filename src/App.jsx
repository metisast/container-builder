import React from 'react'
import Container from './components/Container'
import Area from './components/Area'
import './style.css'
import { inject, observer } from 'mobx-react'

@inject('ContainerStore')
@observer
class App extends React.Component {

    render () {
        const { ContainerStore } = this.props
        const container = <Container ContainerStore = { ContainerStore } Data = { ContainerStore.regularData }/>
        return (
            <div className = 'main'>
               <Area />
                { container }
            </div>
        )
    }
}

export default App