import './App.css';
import Header from "./Components/Header/Header";
import Asaid from "./Components/Aside/Asaid";
import Main from "./Components/Main/Main";
import Dialogs from "./Components/Dialogs/Dialogs";


const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Asaid/>
            <div className='app-wrapper-main'>

                <Dialogs/>

                {/*<Main/>*/}
            </div>
        </div>
    );
}


export default App;


