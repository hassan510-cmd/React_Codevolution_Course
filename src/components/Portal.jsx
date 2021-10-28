import React from 'react'
import  ReactDOM  from 'react-dom'

export default function Portal() {
    return ReactDOM.createPortal (
        <div>
            <h1>portal demo</h1>
            
        </div>,document.getElementById("portal-root")
    )
}
