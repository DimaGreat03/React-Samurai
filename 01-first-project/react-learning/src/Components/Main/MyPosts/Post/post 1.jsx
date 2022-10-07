import s from "./post1.module.css"

const Post1 = () => {
    return (
        <div>
                <div className={s.item}>
                    <img src="http://ru.myanimeshelf.com//eva2/upload/aa9fdc05b862574bf6eef348f5372c57/Fmp_sagara.jpg"/>
                    Hello World. I am first user
                    <div className={s.like}><span>Like</span></div>
                </div>
        </div>
)
}

export default Post1