import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";

export function FormikComponentDemo(){
    return(
        <div className="container-fluid">
            <h2>Register</h2>
            <Formik initialValues={{UserName:'', Age:'', Mobile:''}} validationSchema={yup.object({UserName:yup.string().required('User Name Required').min(4, 'Name too short'), Age:yup.number().required('Age Required')})} onSubmit={(data)=>{console.log(data)}} >
                {
                    form => 
                    <Form>
                     <dl>
                        <dt>User Name</dt>
                        <dd> <Field type="text" name="UserName" /> </dd>
                        <dd className="text-danger"> <ErrorMessage name="UserName" /> </dd>
                        <dt>Age</dt>
                        <dd> <Field type="number" name="Age" /> </dd>
                        <dd className="text-danger"> <ErrorMessage name="Age" /> </dd>
                        <dt>Mobile</dt>
                        <dd> <Field type="text" name="Mobile" /> </dd>
                     </dl>
                     <button disabled={(form.isValid)?false:true} type="submit">Register</button>
                     <div className={(form.isValid)?'d-none':'d-block'} style={{color:'red'}}>
                        <h3>Please check the following errors</h3>
                        <ul>
                            {
                                Object.values(form.errors).map(error=><li key={error}>{error}</li>)
                            }
                        </ul>
                     </div>
                   </Form>
                }
            </Formik>
        </div>
    )
}