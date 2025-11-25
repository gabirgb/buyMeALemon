import './App.css'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/navBar'

function App() {

  return (
    <>
        <NavBar
        usuario = "Pepe"
        itemsEnCarrito = {0}
        />
        <ItemListContainer 
        mensaje = "Bienvenido, acá podrás ver los productos disponibles."
        />

    </>
  )
}

export default App
