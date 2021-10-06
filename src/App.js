import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css/"
import NavBar from './components/NavBar/NavBar';
import AppRouter from "./AppRouter/AppRouter";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import CartContext from './context/cartContext'

function App() {
    return (
        <div className="App" >
             < CartContext.Provider value={[]}>
            
    <AppRouter/>
    </CartContext.Provider>
   


    </div>
        );
}

        export default App;