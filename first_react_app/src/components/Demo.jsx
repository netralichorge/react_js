import React from "react";

class Demo extends React.Component
{
    render()
    {
        return(

            <div>
                <h1>Class Based Component</h1>
                <p>{this.props.message}</p>
                <p>{this.props.year}</p>

                <hr />
            </div>
        
        );
    }

}

export default Demo;