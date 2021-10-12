import { Component } from "react";
import React  from "react";  

class Contentx extends Component{

    constructor(){
        super()
        this.state={
            message:'welcome visitor'
        }
        this.btn_text="subscripe"
        this.count=0
    }

    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <h1>{this.btn_text}</h1>
                <h1>{this.count}</h1>
                <button onClick={()=>{
                    if (this.state.message=="welcome visitor"){
                        this.setState({message:"thnx for subscription"})
                        this.btn_text="unsubscripe"
                        this.count+=1
                    }
                    else{
                        this.setState({message:"welcome visitor"})
                        this.btn_text="subscripe"
                        this.count+=1
                    }
                }}>
                    {this.btn_text}
                </button>
            </div>
        )
    }
}

export default Contentx