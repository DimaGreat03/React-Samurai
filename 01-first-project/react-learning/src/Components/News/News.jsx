import s from "./News.module.css"
import {useState} from "react";

const News = (Dima) => {

    const [count, setCount] = useState(0)
    let plusCounter = () => {
        setCount(count + 1)
    }
    let minusCounter = () => {
        setCount(count - 1)
    }
    let clean = () => {
        setCount(count *0)
    }
    let showAlert = () => {
        if (count > 0) {
            setTimeout(() => {
                alert(`You clicked ${count} times`)
            }, 100)
        }
    }

    return (
        <div className={s.news}>
            This is News later...
            <div>
                This is your counter <span className={s.count}> {count}</span>
                <button onClick={plusCounter}>click me</button>
                <button onClick={minusCounter}>click me</button>
                <button onClick={showAlert}>show alert</button>
                <button onClick={clean}>clean</button>
            </div>
        </div>
    )
}

export default News