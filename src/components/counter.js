import React, { Component } from 'react'

class Counter extends Component {
    constructor() {
        super()
        this.state = { a: 1 }
        this.btn_text = "+"
        this.count = 0
        // console.log(a+63);

    }


    increment() {
        var { a } = this.state

        console.log(a + 12);
        this.setState(
            {
                a: this.state.a + 1
            }, () => console.log("after update", this.state.a)
        )
        console.log("before update", this.state.a);
    }

    increment2() {
        this.setState((prevState) => (
            {
                a: prevState.a + 1
            }
            )
            )
        console.log("before update", this.state.a);
    }

    inc() {
        this.increment()

    }

    // inc() { 
    //     this.increment2()
    //     this.increment2()
    //     this.increment2()
    //     this.increment2()
    //     this.increment2()
    //  }


    render() {
        const { he } = this.props
        return (
            <div>
                <h1>{this.state.a}</h1>
                <button onClick={() => this.inc()}>
                    increment
                </button>

                <h1>{this.count}</h1>

                <button onClick={() => {
                    console.log(he);
                    this.setState({ a: 1 })
                    this.count += 1
                    console.log(this.count);
                }}>
                    {this.btn_text}
                </button>

                <button onClick={() => {
                    this.setState({ a: this.state.a - 1 })
                    console.log("this.state.a", this.state.a);
                    this.count -= 1
                    console.log(this.count);
                }}>
                    -
                </button>
            </div>
        )
    }
}

export default Counter
