import s from "./Header.module.css"

const Header = () => {
    return (
        <header>
            <img className={s.logo}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAHXPluq6GtTRPDIHRv5kJPy86uFjp5sO7hg&usqp=CAU"/>
        </header>
    )
}

export default Header


