import React from 'react'

export default function Person({person,keya}) {
    console.log(keya)

    return (
        <div>
            {/* {props.person.name} {props.person.age} {props.person.skill} */}
            {keya}
            {person.name} {person.age} {person.skill}
        </div>
    )
}
