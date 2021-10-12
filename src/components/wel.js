import React ,{Component} from "react";

class Description extends Component {
    render(){
         {/* new way */}
        const {name} = this.props
        return <small>
                {/*old way */}
            <h1>{this.props.name} old way</h1>
            {/* new way */}
            <h1>{name} new way</h1>
        {this.props.children}
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Aperiam aspernatur recusandae ratione soluta dolore reicie
         ndis, mollitia necessitatibus earum consequuntur, sit volu
         ptatibus incidunt minus labore cum sunt, aliquam qui vitae cupiditate!
    </small>
    }
}


export const Other =() =>{

    return React.createElement
    ('button',
    {id:'b1',className:"test"},
    'click me'
    )
}

export default Description