import React, { Component } from 'react'
import withCounter from './withCounter'

class HoverCounter extends Component {
    render() {
        return (
            <div>
                <button onMouseOver={this.props.increment_count}>Clicked {this.props.count} times {this.props.name}</button> 
            </div>
        )
    }
}

export default withCounter(HoverCounter)
