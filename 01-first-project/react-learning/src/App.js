import './App.css';
import Asaid from "./Components/Aside/Asaid";
import {Routes, Route} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Setting from "./Components/Setting/Setting";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import Footer from "./Components/Footer/footer";
import UsersContainer from "./Components/Users/usersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/LoginContainer";
import Loading from "./Components/Login/Loading";
import {Component} from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {initialAppThunk,} from "./Components/Redux/app-reducer";
import Preloader from "./Components/common/preloader/preloader";


class App extends Component {

    componentDidMount() {
        this.props.initialAppThunk()
    }


    render() {
        if (!this.props.initial) {
            return <Preloader/>
        }
        return (
            <div className="container">
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <Asaid/>
                    <Footer/>
                    <div className='app-wrapper-main'>
                        <Routes>
                            <Route path="/profile/:userId" element={<ProfileContainer/>}/>
                            <Route path="/profile/*" element={<ProfileContainer/>}/>
                            <Route path="/message/*" element={<DialogsContainer/>}/>
                            <Route path="/news" element={<News/>}/>
                            <Route path="/music" element={<Music/>}/>
                            <Route path="/setting" element={<Setting/>}/>
                            <Route path="/users" element={<UsersContainer/>}/>
                            <Route path="/login" element={<Login/>}/>
                            <Route path="/loading" element={<Loading/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    initial: state.app.initial,
})

export default compose(
    connect(mapStateToProps, {initialAppThunk}))
(App)



