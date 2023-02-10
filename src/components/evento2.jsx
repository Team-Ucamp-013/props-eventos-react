import React from "react";
import styles from './evento2.module.css'

class Contador2 extends React.Component{
    shouldComponentUpdate(nextProps){

        if(nextProps.value !== this.props.value){
            return true
        } else {
            return false
        }
    }

    render() {
        console.log("Contador 2 esta aquí")
        return(
            <div className={styles.caja}>
                <h2>Contador 2</h2>
                <h3>{this.props.value}</h3>
                <button onClick={this.props.onClick}>Click</button>
            </div>
        )
    }
}

export default Contador2