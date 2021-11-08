
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css/";
import AppRouter from "./AppRouter/AppRouter";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <AppRouter />
      <Footer/>
    </div>
  );
}

export default App;
