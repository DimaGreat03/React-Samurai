import {useForm} from "react-hook-form";
import s from "./Login.module.css"


const LoginFormHook = (props) => {
    const {
        register,
        reset,
        handleSubmit,
        formState: {errors, isValid}
    } = useForm({mode: "onBlur"})

    const onSubmit = (formData) => {
        props.loginThunk(formData.email, formData.password, formData.rememberMe)
        reset()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
            <div>
                <input className={errors.email && s.loginForm} placeholder={'login'} {...register('email', {
                    required: 'you need typing here',
                    minLength: {
                        value: 5,
                        message: 'не меньше 5 знаков в поле вводи блеадь!'
                    }
                })}/>
                {errors?.email && <p className={s.Login}>{errors?.email?.message}</p>}
            </div>


            <div>
                <input className={errors.password && s.passwordForm} placeholder={'password'} {...register('password', {
                    required: 'you need typing here',
                    minLength: {
                        value: 5,
                        message: 'не меньше 5 знаков в поле вводи блеадь!'
                    }
                })}/>
                <div>
                    {errors?.password && <p className={s.Password}>{errors?.password?.message}</p>}
                </div>
            </div>


            <div>
                <input type={"checkbox"} {...register('rememberMe')} /> remember me
            </div>

            {props.checkAuth ? <div className={s.checkAuth}> {props.error} </div> : null}

            <div>
                <button disabled={!isValid} className={s.button}>Send</button>
            </div>
        </form>
    )
}


export default LoginFormHook;

