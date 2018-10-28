import React from 'react'
import { ExampleData } from '../../store/Example'
import { inject, observer } from 'mobx-react'

@inject('ContainerStore')
@observer
class Area extends React.Component {

    state = {
        valueBuild: '',
        valueGetJSON: '',
    }

    render () {
        const example = JSON.stringify(ExampleData, null, 4)
        
        return (
            <div>
                <form className = 'result result_build' onSubmit = { this.getJSON }>
                    <div className = "result__body">
                        <textarea value = { this.state.valueGetJSON } onChange={this.handleBuild}></textarea>
                        <button>GetJSON</button>
                    </div>
                </form>
                <form className = 'result result_create' onSubmit = { this.build }>
                    <div className = "result__body">
                        <textarea value = { this.state.valueBuild } onChange={this.handleGetJSON}></textarea>
                        <button>Build</button>
                    </div>
                    <div className = 'result__example'>
                        <p>Example:</p>
                        <small>{ example }</small>
                    </div>
                </form>
            </div>
        )
    }

    handleBuild = (e) => {
        this.setState({valueGetJSON: e.target.value});
    }

    handleGetJSON = (e) => {
        this.setState({valueBuild: e.target.value});
    }

    build = (e) => {
        e.preventDefault()
        if (this.state.valueBuild) this.props.ContainerStore.render(this.state.valueBuild)
    }

    getJSON = (e) => {
        e.preventDefault()
        this.setState({valueGetJSON: this.props.ContainerStore.result});
    }

}

export default Area