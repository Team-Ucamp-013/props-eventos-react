import React from "react";

class Contador1 extends React.Component{
    shouldComponentUpdate(nextProps){

        if(nextProps.value !== this.props.value){
            return true
        } else {
            return false
        }
    }

    render() {
        console.log("Contador 1 esta aquí")
        return(
            <div>
                <h2>Contador 1</h2>
                <h3>{this.props.value}</h3>
                <button onClick={this.props.onClick}> Click</button>
            </div>
        )
    }
}

export default Contador1