import React from 'react'
import getRandomColor from '../utils'

class ColorBlock extends React.Component {

    state = {
        color: getRandomColor(1, 10)
    }
    
    render () {
        const item = this.props.item
        return (
            <div className = 'color-block' style = {{ backgroundColor: item.color ? item.color : this.state.color }}></div>
        )
    }

}

export default ColorBlock