import React from "react";
import styles from './styles.module.css'

//-------Props----------
// class Car extends React.Component {
//     render(){
//         return <h2> Yo soy un Toyota {this.props.color}! </h2>
//     }
// }

// export default Car

//----------Clase----------
export class MiCompomente extends React.Component {
    constructor(props){
        super(props)
        this.state = { mytexto: "Hola"};

        this.onChangeText = this.onChangeText.bind(this)
    }

    onChangeText(){
        this.setState({mytexto: "mundo"})
    }


    render(){
        return (
            <div className={styles["especial"]}>
            <h3>{this.state.mytexto}</h3>
            <button onClick={this.onChangeText}>Cambiar texto</button>
            </div>
        )
      
    }
}