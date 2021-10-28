import React, { Component } from 'react'
import ReciveFocus from './ReciveFocus'


export default class Putfocus extends Component {
    constructor(props) {
        super(props)
    
       this.comRefs=React.createRef()
    }

    addFocus=()=>{
        this.comRefs.current.focusInput2()
    }
    
    render() {
        return (
            <div>
               <ReciveFocus ref={this.comRefs}/> 
               <button onClick={this.addFocus}>click from parent</button>
            </div>
        )
    }
}
