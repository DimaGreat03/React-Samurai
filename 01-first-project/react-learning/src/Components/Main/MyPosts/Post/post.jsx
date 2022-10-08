import s from "./post.module.css"

const Post = (props) => {
    return (
        <div>
            <div className={s.item}>
                <img src="http://ru.myanimeshelf.com//eva2/upload/aa9fdc05b862574bf6eef348f5372c57/Fmp_sagara.jpg"/>
                {props.message}
                <div className={s.like}>
                    <span>{props.likes}</span>
                </div>
            </div>


        </div>
    )
}

export default Post