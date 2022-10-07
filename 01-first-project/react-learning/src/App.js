import './App.css';
import Header from "./Components/Header";
import Asaid from "./Components/Asaid";
import Main from "./Components/Main";


const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Asaid/>
            <Main/>
        </div>
    );
}


export default App;


