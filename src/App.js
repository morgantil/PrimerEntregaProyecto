import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css/"
import NavBar from './components/NavBar/NavBar';
import AppRouter from "./AppRouter/AppRouter";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";


function App() {
    return (
        <div className="App" >
    <AppRouter/>
    


    </div>
        );
}

        export default App;