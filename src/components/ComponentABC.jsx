import React, { Component } from 'react'
import { Reciever } from './userContext'

export default class ComponentABC extends Component {
    render() {
        return (
            <Reciever>
                {recieved_value=>{return <div>hello {recieved_value}</div>}}
            </Reciever>
        )
    }
}
