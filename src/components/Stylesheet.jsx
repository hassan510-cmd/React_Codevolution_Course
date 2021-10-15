import React, { Component } from 'react'
import "./style.css"
export default class Stylesheet extends Component {
    render() {
        let issuccess= this.props.issuccess ? 'success' : ''
        return (
            <div>
                <h1 className='success'>Style Sheet</h1>
                <h1 className={issuccess}>Style Sheet</h1>
            </div>
        )
    }
}
