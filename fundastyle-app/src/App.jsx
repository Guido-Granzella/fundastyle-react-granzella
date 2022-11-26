import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import CollapsibleExample from './Components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Footer from './Components/Footer/Footer';
import UncontrolledExample from './Components/Carrusel/Carrusel';


function App() {
  return (
    <div>
      <header className='espacio'>
        <CollapsibleExample/>
      </header>

      <body>
        <main>
          <UncontrolledExample/>
          <ItemListContainer greeting="Elegí"/>
        </main>

        <footer>
          <Footer/>
        </footer>
      </body>
    </div>
  )
}

export default App
