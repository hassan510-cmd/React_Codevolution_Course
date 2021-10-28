import React, { Component } from 'react'
import withCounter from './withCounter'

class ClickCounter extends Component {



    render() {
        return (
            <div>
                <button onClick={this.props.increment_count}>
                    Clicked {this.props.count} 
                    times {this.props.name} 
                    {this.props.name2}
                </button>
            </div>
        )
    }
}

export default withCounter(ClickCounter)