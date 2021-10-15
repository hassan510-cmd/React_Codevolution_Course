import React, { Component } from 'react'
export default class EventBind extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: 'hello'
        }
        // 4- bind in constructor way
        this.say_googbye=this.say_googbye.bind(this)
    }
    say_googbye() { this.setState({ message: 'googbye' }) }
    // this in the previous function refer to the function not the class because it's 
    // a regular function , so if you want to use this inside it you should bind the
    // this to it at call
    
    // class property as arrow function
    //  -> --> ==> ?. == === ==== 
    //  .... >>- --> >= <= != ~> \\ // /* */ /= ~= WWW www 0xff <> <!-- -->      
    goodbye= ()=> { this.setState({ message: 'googbye' }) }
    render() {
        return (
            <div>
                {this.state.message}
                <div style={{display:'flex','flex-direction': 'column'}}>
                    {/* 1- wrong way */}
                    <button onClick={this.say_googbye}>wrong goodbye</button>
                    {/* 2- right way */}
                    <button onClick={this.say_googbye.bind(this)}>right goodbye</button>
                    {/* 3- arrow function way */}
                    <button onClick={()=>this.say_googbye()}>arrow - right goodbye</button>
                    {/* 4- bind in constructor way */}
                    <button onClick={this.say_googbye}>class bind - right goodbye</button>
                    {/* 5- class property as arrow function */}
                    <button onClick={this.goodbye}>arrow bind - right goodbye</button>
                </div>
            </div>)
    }
}
