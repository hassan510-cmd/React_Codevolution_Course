import React from 'react'
import Person from './Person'

function ListElements() {




    let names = ['hassan', 'ehab', 'bayoumi']
    // return (
    //     <div>
    //         <h1>{names[0]}</h1>
    //         <h1>{names[1]}</h1>
    //         <h1>{names[2]}</h1>
    //     </div>
    // )

    // return(
    //     names.map(x=> <h1>{x}</h1>)
    // )

    // let name_list=names.map(x=> <h1>{x}</h1>)
    // return(name_list)

    const person = [
        {   
            id:1,
            name: 'hassan',
            age: 22,
            skill: 'pyhton'
        },
        {   
            id:2,
            name: 'ehab',
            age: 23,
            skill: 'java'
        }
    ]

    // let one=person.map(obj=><h3>{obj.name} {obj.age} {obj.skill}</h3>)
    // return one

    // let one=person.map(obj=><Person key={obj.id} person={obj} />)
    let one=person.map((obj,index)=><Person keya={index} key={index} person={obj} />)
    return one


}
export default ListElements