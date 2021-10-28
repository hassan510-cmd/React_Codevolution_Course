import React, { Component } from 'react'

export default class ReciveFocus extends Component {
    constructor(props) {
        super(props)

        this.ref2 = React.createRef()
    }

    focusInput2 = () => {
        this.ref2.current.focus()
    }
    render() {
        return (
            <div>
                way3<input type="text" ref={this.ref2} />
            </div>
        )
    }
}
