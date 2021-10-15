import React from 'react'

export default function NewComp() {
    
    function btn1_method(){
        console.log("object")
    }
    

    return (
        <div>
            <button onClick={btn1_method}>my focken btn</button>
        </div>
    )
}
