import React, { Component } from 'react'
 class BoundryErorr extends Component {
	constructor(props) {
		super(props)

		this.state = {
			fine: true
		}
	}

	static getDerivedStateFromError(error) {
		return { fine: false }
	}

	// componentDidCatch(error, info) {
	// 	console.log(error)
	// 	console.log(info)
	// }

	render() {
        console.log("******************************"+this.state.fine)
		if (this.state.fine) {
            return this.props.children
		}
        return <h1>Something went wrong.</h1>
	}
}
export default BoundryErorr