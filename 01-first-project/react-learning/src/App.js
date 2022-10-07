import './App.css';
import Header from "./Components/Header/Header";
import Asaid from "./Components/Aside/Asaid";
import Main from "./Components/Main/Main";


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


