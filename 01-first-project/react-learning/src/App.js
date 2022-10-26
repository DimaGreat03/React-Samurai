import './App.css';
import Header from "./Components/Header/Header";
import Asaid from "./Components/Aside/Asaid";
import Profile from "./Components/Profile/Profile";
import {Routes, Route} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Setting from "./Components/Setting/Setting";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import Footer from "./Components/Footer/footer";
import UsersContainer from "./Components/Users/usersContainer";



const App = (props) => {

    return (
        <div className="app-wrapper">
            <Header/>
            <Asaid/>
            <Footer/>
            <div className='app-wrapper-main'>
                <Routes>
                    <Route path="/profile" element={<Profile />}/>
                    <Route path=":message/*" element={<DialogsContainer />}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/setting" element={<Setting/>}/>
                    <Route path="/users" element={<UsersContainer/>}/>
                </Routes>
            </div>
        </div>
    );
}


export default App;


