import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            comment: '',
            gender: 'none'
        }
    }

    handelinputtxt = (event) => {
        this.setState(
            {
                username: event.target.value
            }
            , () => console.log(this.state.username)
        )
        console.log(this.state.username)

    }

    handeltextarea = event => {
        this.setState(
            {
                comment: event.target.value
            }
        )
    }

    handleselection = event => {
        this.setState({
            gender: event.target.value
        })
    }

    handlesubmit = event=>{
        alert(`${this.state.username} \n comment : ${this.state.comment}`)
        event.preventDefault()
    }
    render() {
        return (
            <form onSubmit={this.handlesubmit}>
                <div>
                    <label htmlFor="username">username: </label>
                    <input
                        type="text"
                        value={this.state.username}
                        onChange={this.handelinputtxt}
                    />
                    <label htmlFor="comments">Comments</label>
                    <textarea name="" id="" cols="30" rows="10" onChange={this.handeltextarea}></textarea>
                    <label htmlFor="gender">gender</label>
                    <select name="" id="" onChange={this.handleselection} value='female'>
                        <option value="male">male</option>
                        <option value="female">female</option>
                    </select>
                    <h1>{this.state.username}</h1>
                    <h3>{this.state.comment}</h3>
                    <h4>{this.state.gender}</h4>

                </div>
                <button type="submit" >submit</button>
            </form>
        )
    }
}
