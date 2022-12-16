import {useForm} from "react-hook-form";


const HookForm = (props) => {
    const {register, handleSubmit, reset, formState: {isValid}} = useForm()
    const onSubmit = (formData) => {
        props.addNewText(formData.textArea)
        reset()
    }

    return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <textarea placeholder={'your text'} {...register('textArea', {required: true})}/>
                <div>
                    <button disabled={!isValid}>send</button>
                </div>
            </form>
    )
}

export default HookForm;