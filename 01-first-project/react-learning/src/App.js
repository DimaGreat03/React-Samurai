import './App.css';
import Header from "./Components/Header/Header";
import Asaid from "./Components/Aside/Asaid";
import Main from "./Components/Main/Main";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Routes, Route,} from "react-router-dom";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Asaid/>
                <div className='app-wrapper-main'>
                    <Routes>
                        <Route path="/profile" element={<Main/>}/>
                        <Route path="/dialogs" element={<Dialogs/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;


