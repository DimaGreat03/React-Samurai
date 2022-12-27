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
            <div className={s.login}>
                <input placeholder={'login'} {...register('email', {
                    required: 'you need typing here',
                    minLength: {
                        value: 5,
                        message: 'не меньше 5 знаков в поле вводи блеадь!'
                    }
                })}/>
                {errors?.email && <p>{errors?.email?.message}</p>}
            </div>
            <div className={s.password}>
                <input placeholder={'password'} {...register('password', {
                    required: 'you need typing here',
                    minLength: {
                        value: 5,
                        message: 'не меньше 5 знаков в поле вводи блеадь!'
                    }
                })}/>
                <div>
                    {errors?.password && <p>{errors?.password?.message}</p>}
                </div>
            </div>
            <div>
                <input type={"checkbox"} {...register('rememberMe')} /> remember me
            </div>
            <button disabled={!isValid} className={s.button}>Send</button>
        </form>
    )
}

export default LoginFormHook