import React, { Component } from 'react'
import LifecycleB from './LifecycleB'
import '../bootstrap.min.css'
export default class LifecycleA extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: 'hassan'
        }
        console.log('Lifecycle A constructor')
    }

    static getDerivedStateFromProps() {
        console.log('Lifecycle A getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('Lifecycle A componentDidMount')
    }

    shouldComponentUpdate() {
        console.log('Lifecycle A shouldComponentUpdate')
        return true

    }

    getSnapshotBeforeUpdate() {
        console.log('Lifecycle A getSnapshotBeforeUpdate')
        return null

    }

    componentDidUpdate() {
        console.log('Lifecycle A componentDidUpdate')
    }
    changeState = () => {
        this.setState({
            name: "new hassan"
        })
    }

    render() {
        console.log('Lifecycle A render')
        return (
            <div>
                Lifecycle A
                <button className='btn btn-primary' onClick={this.changeState}>changeState</button>
                <LifecycleB />
            </div>
        )
    }
}
