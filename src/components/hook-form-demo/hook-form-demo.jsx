
import { useForm } from "react-hook-form"

export function HookFormDemo(){

    const {register, handleSubmit, formState:{errors}} = useForm();

    const submit = (data)=>{
        console.log(data);
    }


    return(
        <div className="container-fluid">

            <form onSubmit={handleSubmit(submit)}>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" {...register("UserName", { required:true, minLength:4 })} name="UserName" /></dd>
                    <dd className="text-danger">
                        {(errors.UserName?.type==="required")?<span>Name Required</span>:<span></span> && (errors.UserName?.type==="minLength")?<span>Name too short</span>:<span></span>}
                    </dd>
                    <dt>Mobile</dt>
                    <dd>
                        <input type="text" {...register("Mobile", {required:true, pattern:/^\+91\d{10}$/})} name="Mobile" />
                    </dd>
                </dl>
                <button type="submit">Submit</button>
            </form>

        </div>
    )
}