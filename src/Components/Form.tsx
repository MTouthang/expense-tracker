import { FieldValues, useForm } from "react-hook-form"


interface FormData {
    name: string,
    age: number
}

const Form = () => {


    const { register, handleSubmit, formState: { errors } } = useForm<FormData>()

    const onSubmit = (data: FieldValues) => console.log(data)


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input id="name" {...register("name", {
                    required: "true",
                    minLength: 3
                })} type="text" className="form-control" />
                {errors.name?.type === 'required' && <p className="text-danger"> The name field is required</p>}
                {errors.name?.type === 'minLength' && <p className="text-danger"> Minimum characters should be 3</p>}
            </div>
            <div className="mb-3">
                <label htmlFor="age" className="form-label">Age</label>
                <input id='age' {...register("age", {
                    required: "true"
                })} type="number" className='form-control' />
                {errors.age?.type === 'required' && <p className="text-danger"> The age field is required</p>}

            </div>
            <button className='btn btn-primary' type='submit'>Submit </button>
        </form>
    )
}

export default Form