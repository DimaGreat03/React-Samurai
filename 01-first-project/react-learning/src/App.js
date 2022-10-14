import './App.css';
import Header from "./Components/Header/Header";
import Asaid from "./Components/Aside/Asaid";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Setting from "./Components/Setting/Setting";


const App = (props) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Asaid/>
                <div className='app-wrapper-main'>
                    <Routes>
                        <Route path="/profile" element={<Profile posts={props.next.profilePage.posts}/>}/>
                        <Route path=":message/*"
                               element={<Dialogs arrayNames={props.next.messagePage.arrayNames} arrayMessages={props.next.messagePage.arrayMessages}/>}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/setting" element={<Setting/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;


