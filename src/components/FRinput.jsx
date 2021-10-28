import React from 'react'

//  function FRinput() {
//     return (
//         <div>
//             <input type="text" name="" id="" />
//         </div>
//     )
// }

const FRinput = React.forwardRef((props,ref) => {
    return (
        <div>
            <input type="text" name="" id="" ref={ref} />
        </div>
    )
})
export default FRinput
