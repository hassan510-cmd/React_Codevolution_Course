import React, { Component } from 'react'
import FRinput from './FRinput'

export default class FRParentinput extends Component {

    constructor(props) {
        super(props)
    
     this.inputRef=React.createRef()
    }

    clickHandelr= ()=>{
        this.inputRef.current.focus()
    }
    
    render() {
        return (
            <div>
                <FRinput ref={this.inputRef}></FRinput>
                <button onClick={this.clickHandelr}>foucs input</button>
            </div>
        )
    }
}
