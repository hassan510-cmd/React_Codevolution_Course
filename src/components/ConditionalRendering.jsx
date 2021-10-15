import React, { Component } from 'react'

export default class ConditionalRendering extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isloggin: false
        }
    }



    render() {
        // if / else render
        // if (this.state.isloggin) {

        //     return (

        //         <div>
        //             welcome user
        //         </div>
        //     )
        // }
        // else {
        //     return (

        //         <div>
        //             welcome guset
        //         </div>
        //     )
        // }

        // variable render
        // let flag
        // if (this.state.isloggin) {
        //     flag = <div>
        //         welcome user
        //     </div>
        // }
        // else {
        //     flag = <div>
        //         welcome guset
        //     </div>
        // }
        // return flag

        // ternary operator
        // return this.state.isloggin ?  <div>welcome user</div> : <div>welcome guset</div>


        // short circut operator
        // return this.state.isloggin &&  <div>welcome user</div> 
        return this.state.isloggin &&  <div>welcome user</div> || <div>welcome guest</div>

    }

}
