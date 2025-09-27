import './styles/App.scss'
import Header from './components/Header'
import Footer from './components/Footer'
import data from './data/users.json'//datos en formato json, se guardan dentro de src
import {Routes, Route} from 'react-router'
import { useState } from 'react'

function App() {

  return (
    <>
    <Header></Header>
 
    <Routes>
      <Route >
        
      </Route>
    </Routes>

            <h1>Cómo trabajar con componentes y hojas de estilo en React</h1>
            <ol>
              <li>Crear un componente: carpeta src-carpeta components-archivo Header.jsx</li>
              <li>Crear una hoja de estilos para ese componente: carpeta styles-carpeta components-archivo header.scss</li>
              <li>Importar la hoja de estilos en el componente: dentro de Header.jsx se escribe: import '../styles/components/header.scss'</li>
              <li>Importar el componente en el componente principal App.jsx: dentro de App.jsx se escribe: import Header from './components/Header'</li>
            </ol>

      <Footer></Footer>
    </>
  )
}

export default App

//Cuando creas un componente, en el archivo del componente escribes rfce y se te genera la estructura básica
//Todo pasa por App
//Si las variables de estado las voy a utilizar en más de un componente hay que ponerlas en App para facilitar el flujo
//Hay que importar el componente donde se vaya a utilizar
//Pasar información entre componentes por props: nombreInventadoProp={nombreRealProp}
  //1. Componente envía la prop 
  //2. Componente recibe la prop

