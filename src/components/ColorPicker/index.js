import React from 'react';
import { SketchPicker } from 'react-color';

class ColorPicker extends React.Component {

    state = {
        color: this.props.color,
        displayColorPicker: this.props.show
    }

    componentWillReceiveProps (nextProps, nextState) {
        this.setState({displayColorPicker: nextProps.show})
    }

    render () {
        return (
            <div>
                {
                    this.state.displayColorPicker ? 
                        <div className = 'popover'><div className = 'cover' onClick={ this.handleClose }/>
                            <SketchPicker color = { this.state.color } onChangeComplete = { this.handleChangeComplete } />
                        </div> : null
                }
            </div>
        )
    }

    handleChangeComplete = (color) => {
        this.setState({ color: color.hex });
        this.props.changeColor(color.hex)
    };

    handleClose = () => {
        this.setState({ displayColorPicker: false })
    };
}

export default ColorPicker