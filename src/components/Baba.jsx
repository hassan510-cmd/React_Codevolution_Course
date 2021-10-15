import React, { Component } from 'react'
import Son from './Son'

class Baba extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             baba_name:'mahmoud'
        }

    }
    father_name= (childname) => {
        alert(`hello ${ this.state.baba_name} i'm ${childname} your son`)
       
    }
    
    render() {
        return (
            <div>
                <Son parentMethod={this.father_name}/>
            </div>
        )
    }
}
export default Baba
