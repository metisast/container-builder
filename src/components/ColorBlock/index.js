import React from 'react'
import getRandomColor from '../utils'
import ColorPicker from '../ColorPicker'

class ColorBlock extends React.Component {

    state = {
        color: getRandomColor(1, 10),
        show: false,
        renderWill: false
    }
    
    render () {
        const item = this.props.item
        const color = item.color ? item.color : this.state.color
        const style = { backgroundColor: color }
        return (
            <div className = 'color-block' style = { style } onClick = { this.handleClick }>
                <ColorPicker color = { color } show = { this.state.show } changeColor = { this.handlerChangeColor }/>
            </div>
        )
    }

    handleClick = () => {
        this.setState({ show: !this.state.show })
    }

    handlerChangeColor= (color) => {
        this.setState({ color: color })
        this.props.item.color = color
        this.forceUpdate()
    }

}

export default ColorBlock