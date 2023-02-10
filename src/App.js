import './App.css';
// import Car from './components/componente'; 
import { MiCompomente } from './components/componente';

import Contador1 from './components/evento1';
import Contador2 from './components/evento2';

import { useState } from 'react';
import styles from './components/styles.module.css'

import ColorSchemesExample from './navbar/Navbar';

function App() {
  const [contador1, setContador1] = useState(0)
  const incrementa1 = () => {
    setContador1(contador1 + 1)
  }

  const [contador2,setContador2] = useState(0)
  const incrementa2 = () => {
    setContador2(contador2 + 1)
  }

  return (
    <div className="App">
    
       {/* <Car color="red" /> */}
    <ColorSchemesExample />
     <MiCompomente />
      
     <section className={styles.box}>
     <Contador1 value={contador1} onClick={incrementa1} />
      <Contador2  value={contador2} onClick={incrementa2}/>
     </section>
       
    </div>
  );
}

export default App;
