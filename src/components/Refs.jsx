import React, { Component } from 'react'

export default class Refs extends Component {

    constructor(props) {
        super(props)
    
        this.inputRefs=React.createRef()
        this.cbRef=null
        this.setCbRef=element=>{
            this.cbRef=element
        }
    }

    componentDidMount(){

        if(this.cbRef){
            
            this.cbRef.focus() 
        }
        this.inputRefs.current.focus()
    }
    
    clickHandler=()=>{
        this.inputRefs.current.focus()
        // alert(`${this.inputRefs.current.value}`)
    }

    
    render() {
        return (
            <div>
                way2<input type="text" ref={this.setCbRef}/>
                -----
                way1<input type="text" ref={this.inputRefs}/>
                ------
                <button onClick={this.clickHandler}>click</button>
       
            </div>
        )
    }
}
