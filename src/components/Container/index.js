import React from 'react'
import ColorBlock from '../ColorBlock'

class Container extends React.Component {

    state = {
        featureShow: false,
        colorBlocks: [],
        n: this.props.n
    }

    render () {
        const { TestStore } = this.props

        return (
            <div className = 'wrapper'>
                <section className = 'container'>
                    <section className = 'color-block-container'>
                        { this.state.colorBlocks.map((block, index) => {
                            return (<ColorBlock key = {index} />)
                        }) }
                    </section>

                    { this.props.n !== 1 ? <Container n = { this.props.n - 1 } TestStore = { TestStore } /> : '' }

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
            state.colorBlocks.push({test : 1})
        ))
    }

    createContainer = () => {
        this.props.TestStore.plus()
    }
}

export default Container