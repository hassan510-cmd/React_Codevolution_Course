import React, { Component } from 'react'

export default class LifecycleB extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: 'hassan'
        }
        console.log('Lifecycle B constructor')
    }

    static getDerivedStateFromProps() {
        console.log('Lifecycle B getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('Lifecycle B componentDidMount')
    }

    shouldComponentUpdate() {
        console.log('Lifecycle B shouldComponentUpdate')
        return true

    }

    getSnapshotBeforeUpdate() {
        console.log('Lifecycle B getSnapshotBeforeUpdate')
        return null

    }

    componentDidCatch() {
        console.log('Lifecycle B componentDidCatch')

    }

    componentDidUpdate() {

        console.log('Lifecycle B componentDidUpdate')
    }

    render() {
        console.log('Lifecycle B render')
        return (
            <div>
                Lifecycle B
            </div>
        )
    }
}
