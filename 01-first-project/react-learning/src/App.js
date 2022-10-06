import './App.css';


const App = (props) => {
    return (
        <div className="app-wrapper">
            <header>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAHXPluq6GtTRPDIHRv5kJPy86uFjp5sO7hg&usqp=CAU"/>
            </header>

            <aside>
                <div><a href="#"> Profile </a></div>
                <div><a href="#">Messages</a></div>
                <div><a href="#">News</a></div>
                <div><a href="#">Music</a></div>
                <p>
                    <div><a href="#">Setting</a></div>
                </p>
            </aside>

            <main>
                <div>
                    <img
                        src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"/>
                </div>
                <div>
                    <img id="Kensi"
                         src="https://cdn.myanimelist.net/s/common/uploaded_files/1442184843-515d9f296a98530000e345d4c3bad3b1.jpeg"/>
                    AVA + FESCRIPTION
                </div>
                <div>
                    MY POSTS
                    <div>New posts</div>
                </div>
                <div>
                    <div>
                        post 1
                    </div>
                    <div>
                        post 2
                    </div>
                </div>
            </main>
        </div>
    );
}


export default App;


