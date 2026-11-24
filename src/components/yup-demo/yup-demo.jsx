import { useFormik } from "formik"
import * as yup from "yup";

export function YupDemo(){


    const formik = useFormik({
        initialValues: {
            UserName:'',
            Age:'',
            Mobile:''
        },
        validationSchema: yup.object({
            UserName: yup.string().required('User Name Required').min(4, 'Name too short'),
            Age: yup.number().required('Age Required'),
            Mobile: yup.string().required('Mobile Required').matches(/^\+91\d{10}$/,'Invalid Mobile +91 10 digits')
        }),
        onSubmit:(data)=>{
            console.log(data);
        }
    })

    return(
        <div className="container-fluid">
            <form onSubmit={formik.handleSubmit} noValidate>
                <dl>
                    <dt>Name</dt>
                    <dd><input type="text" onChange={formik.handleChange} name="UserName"/></dd>
                    <dd className="text-danger">{formik.errors.UserName}</dd>
                    <dt>Age</dt>
                    <dd><input type="number" onChange={formik.handleChange} name="Age"/></dd>
                    <dd className="text-danger">{formik.errors.Age}</dd>
                    <dt>Mobile</dt>
                    <dd><input type="text" onChange={formik.handleChange} name="Mobile"/></dd>
                    <dd className="text-danger">{formik.errors.Mobile}</dd>
                </dl>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}