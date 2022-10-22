import './App.css';
import Header from "./Components/Header/Header";
import Asaid from "./Components/Aside/Asaid";
import Profile from "./Components/Profile/Profile";
import {Routes, Route} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Setting from "./Components/Setting/Setting";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";


const App = (props) => {

    return (
        <div className="app-wrapper">
            <Header/>
            <Asaid/>
            <div className='app-wrapper-main'>
                <Routes>
                    <Route path="/profile" element={<Profile store={props.store}/>}/>
                    <Route path=":message/*" element={<DialogsContainer store={props.store}/>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/setting" element={<Setting/>}/>
                </Routes>
            </div>
        </div>
    );
}


export default App;


