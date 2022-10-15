import React from "react";
import {rerenderEntriesTree} from "../../render";

let typingText = React.createRef()

let sentMessage = () => {
    let text = typingText.current.value;
    alert(text)
}

let state = {

    messagePage: {
        arrayNames: [
            {url: 1, name: 'Dima', img: <img width="50px" src="/image/dima.png"/> },
            {url: 2, name: 'Polya', img: <img width="50px" src="/image/polina.png"/> },
            {url: 3, name: 'Eranga', img: <img width="50px" src="/image/erana.png"/> },
            {url: 4, name: 'Kalash', img: <img width="50px" src="/image/kalash.png"/> }
        ],
        arrayMessages: [
            {id: 1, message: <li> 'Hi, i-am Dima' </li>},
            {id: 2, message: <li>'I am Polya, and I am funny'</li>},
            {id: 3, message: <li>'Just Eranga'</li>},
            {id: 4, message: <li>'I-am Budik'</li>, textarea: <textarea ref={typingText}></textarea>, button: <button onClick={sentMessage}>sent message</button>}
        ]
    },
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, i-am ruroni Kenshin', scoreLikes: 'Likes 35'},
            {id: 2, message: 'My favorite samurai anime', scoreLikes: 'Likes 77'}
        ]
    }
}


    export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        scoreLikes: 0
    };
    state.profilePage.posts.push(newPost)
        rerenderEntriesTree(state)
}


export default state