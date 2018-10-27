import React from 'react'
import getRandomColor from '../utils'

class ColorBlock extends React.Component {

    state = {
        color: getRandomColor(1, 10)
    }
    
    render () {
        return (
            <div className = 'color-block' style = {{ backgroundColor: this.state.color }}></div>
        )
    }

}

export default ColorBlock