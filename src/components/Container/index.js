import React from 'react'
import ColorBlock from '../ColorBlock'

class Container extends React.Component {

    state = {
        featureShow: false,
        colorBlocks: this.props.items,
        n: this.props.n
    }

    render () {
        const { ContainerStore, items } = this.props
        const container = items.map((data, index) => {
            if (data.type === 'container') {
                return <Container n = { ContainerStore.count } ContainerStore = { ContainerStore } key = { index } items = { data.items } />
            }
            return false
        })
        const colorBlock = items.map((data, index) => {
            if (data.type === 'box') return (<ColorBlock key = {index} item = { data }/>)
            return false
        })

        return (
            <div className = 'wrapper'>
                <section className = 'container'>
                    <section className = 'color-block-container'>
                        { colorBlock }
                    </section>
                    { container }
                    <div className = 'label' onMouseEnter = { this.toggle } onMouseLeave = { this.toggle }>
                        <span>Add</span>
                        <div className = { this.state.featureShow ? 'features features_show' : 'features' }>
                            <button onClick = { this.renderBox }>Box</button>
                            <button onClick = { this.createContainer }>Container</button>
                        </div>
                    </div>
                </section>
            </div>
        )
    }

    toggle = () => {
        this.setState((state, props) => ({
            featureShow: !state.featureShow
        }))
    }

    renderBox = () => {
        this.setState((state, props) => (
            state.colorBlocks.push({item : 'box'})
        ))
    }

    createContainer = () => {
        const item = {
            type: 'container',
            items: []
        }
        this.props.ContainerStore.plus()
        // this.props.ContainerStore.add(item)
    }
}

export default Container