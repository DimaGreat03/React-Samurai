import './App.css';
import Header from "./Components/Header/Header";
import Asaid from "./Components/Aside/Asaid";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {Routes, Route} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Setting from "./Components/Setting/Setting";


const App = (props) => {

    return (
        <div className="app-wrapper">
            <Header/>
            <Asaid/>
            <div className='app-wrapper-main'>
                <Routes>
                    <Route path="/profile"
                           element={<Profile profilePage={props.next.profilePage}
                                             dispatch={props.dispatch}/>}/>
                    <Route path=":message/*" element={<Dialogs arrayNames={props.next.messagePage.arrayNames}
                                                               arrayMessages={props.next.messagePage.arrayMessages}/>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/setting" element={<Setting/>}/>
                </Routes>
            </div>
        </div>
    );
}


export default App;


