import React from 'react'

export default function WrongComp({name}) {
    if (name=='wrong'){
        throw new Error('wrong send')
    }
    return (
        <div>
           all right
        </div>
    )
}
