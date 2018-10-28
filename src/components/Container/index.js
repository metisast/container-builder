import React from 'react'
import ColorBlock from '../ColorBlock'

class Container extends React.Component {

    state = {
        featureShow: false,
        willRender: false
    }

    render () {
        const { ContainerStore, Data } = this.props
        const container = Data.items.map((data, index) => {
            if (data.type === 'container') {
                return <Container ContainerStore = { ContainerStore } key = { index } Data = { data }/>
            }
            return false
        })
        const colorBlock = Data.items.map((data, index) => {
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
                            <button onClick = { this.deleteContainer }>Delete</button>
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
        const item = {
            type: 'box'
        }
        this.props.Data.items.push(item)
        this.willRender()
    }

    createContainer = () => {
        const item = {
            type: 'container',
            items: []
        }
        this.props.Data.items.push(item)
        this.willRender()
    }

    deleteContainer = () => {
        this.props.Data.items = []
        this.willRender()
    }

    willRender = () => {
        this.setState((state, props) => ({
            willRender: !state.willRender
        }))
    }
}

export default Container