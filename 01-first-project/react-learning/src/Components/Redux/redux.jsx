
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
            {id: 4, message: <li>'I-am Budik'</li>}
        ]
    },
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, i-am ruroni Kenshin', scoreLikes: 'Likes 35'},
            {id: 2, message: 'My favorite samurai anime', scoreLikes: 'Likes 77'}
        ]
    }
}

export default state