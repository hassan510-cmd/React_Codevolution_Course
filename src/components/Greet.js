import React from 'react'

function Greet(args){
    // another way to retrive args destructing 
    const {name,age} = args
    return(
        <div>
            {/*         old way     new way */}
            <h1>Hello {args.name} , {age}</h1>   
            {args.children}
        </div>
         )
}

export const Career = () => <h3>Python developer</h3>

export default Greet
