import React, { Component } from 'react'
import MemoComp from './MemoComp'

import Notpurecomp from './Notpurecomp'
import Purecomp from './Purecomp'

export default class ComparePureandNot extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'hasan'
        }
    }

    // componentDidMount(){

    //     setInterval(() => {
    //         this.setState({
    //             name:'hassan'
    //         })
    //     }, 2000);
    // }

    render() {
        console.log("**************parent comp render**************")
        return (
            <div>
               <Purecomp/>

                <Notpurecomp/>
                <MemoComp></MemoComp>
            </div>
        )
    }
}
