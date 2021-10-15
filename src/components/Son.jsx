import React from 'react'

 function Son(props) {
    return (
        <div>
            <button onClick={()=>props.parentMethod('hassan')}>greet parent</button>
        </div>
    )
}

export default Son