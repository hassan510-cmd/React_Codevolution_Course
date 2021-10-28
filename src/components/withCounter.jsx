import React from 'react'

// arrow function take one parameter "original component" then ->
// define new class component with it's properties then ->
// add new render the original component with new feature ->
// return whole updated component 
const withCounter = (OriginalComponent) => {

    class UpdatedComponent extends React.Component {
        constructor(props) {
            super(props)

            this.state = {
                count: 0
            }
        }

        increment_count = () => {
            this.setState({
                count: this.state.count + 1
            })
        }
        render() {
            return (

                <div>
                    <button>عافية ذوق</button>
                    <OriginalComponent
                        count={this.state.count}
                        increment_count={this.increment_count}
                        {... this.props}
                         />
                </div>

            )
        }
    }

    return (
        UpdatedComponent
    )
}

export default withCounter
