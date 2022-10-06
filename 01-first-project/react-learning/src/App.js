import logo from './logo.svg';
import './App.css';

const App = (props) => {
    return (
        <div>
            <Header/>
            <Technologies/>
        </div>
    );
}

const Header = (props) => {
    return (
        <div>
            <p><a href="#">Power</a></p>
            <p><a href="#">Education</a></p>
            <p><a href="#">Just Keep</a></p>
            <p><a href="#">Funny</a></p>
        </div>
    );
}
    const Technologies = (props) => {
        return (
            <div className="App">
                <ul>
                    <p>
                        <li>I AM LEARNING REACT. NOW 06.10.2022.</li>
                    </p>
                    <p>
                        <li>SECOND LEARNING</li>
                    </p>
                    <p>
                        <li>JUST KEEP LEARNING</li>
                    </p>
                    <p>
                        <li>DONT STOP</li>
                    </p>
                </ul>
                <div> DONT STOP DIMA</div>
            </div>
        )
    }


export default App;

