import { FieldValues, useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { categories } from "../helper/constant"



const schema = z.object({
    description: z.string().min(3, { message: "description should be at least 3 char" }).max(50),
    amount: z.number({ invalid_type_error: "Amount is required" }).min(0.01).max(100_000),
    category: z.enum(categories, { errorMap: () => ({ message: "category is required" }) })
})

interface Props {
    onSubmit: (data: ExpenseFormData) => void
}

type ExpenseFormData = z.infer<typeof schema>
const Form = ({ onSubmit }: Props) => {
    const { register, handleSubmit, reset, formState: { errors, isValid } } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) })




    return (
        <form onSubmit={handleSubmit(data => {
            onSubmit(data);
            reset()
        })}>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <input id="description" {...register("description")} type="text" className="form-control" />

                {errors.description && <p className="text-danger"> {errors.description.message}</p>}
            </div>
            <div className="mb-3">
                <label htmlFor="age" className="form-label">Amount</label>
                <input id='amount' {...register("amount", { valueAsNumber: true })} type="number" className='form-control' />
                {errors.amount && <p className="text-danger"> {errors.amount.message}</p>}

            </div>

            <div className="mb-3">
                <label htmlFor="category" className="form-label">Category</label>
                <select id="category" className="form-control" {...register("category")}>
                    <option value=""></option>
                    {categories.map(category =>


                        <option key={category} value={category}>
                            {category}
                        </option>)}
                </select>
                {errors.category && <p className="text-danger"> {errors.category.message}</p>}


            </div>
            <button disabled={!isValid} className='btn btn-primary' type='submit'>Submit </button>
        </form>
    )
}

export default Form