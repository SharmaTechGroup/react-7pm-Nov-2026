import { useFormik } from "formik"

export function FormikDemo(){

    function ValidateUser(formData){
        let errors = {};

        if(formData.UserName.length===0){
            errors.UserName = 'User Name Required';
        } else {
            if(formData.UserName.length<4){
                errors.UserName = 'Name too short - Min 4 chars required'
            }
        }

        if(formData.Mobile.length===0){
            errors.Mobile = 'Mobile Required'
        } else {
            if(!formData.Mobile.match(/^\+91\d{10}$/)){
                errors.Mobile = 'Invalid Mobile : +91 and 10 digits';
            }
        }

        if(formData.City==='-1'){
            errors.City = 'City Required';
        } 
        

        return errors;
    }

    const formik = useFormik({
         initialValues: {
            UserName: '',
            Mobile:'',
            City: '-1'
         },
         validate: ValidateUser,
         onSubmit: (formData)=>{
            console.log(formData);
         }
    })

    return(
        <div className="container-fluid">
            <form onSubmit={formik.handleSubmit}>
                <h3>Register User</h3>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" {...formik.getFieldProps("UserName")} name="UserName" /></dd>
                    <dd className="text-danger">{formik.touched.UserName && formik.errors.UserName }</dd>
                    <dt>Mobile</dt>
                    <dd><input type="text" onBlur={formik.handleBlur} onChange={formik.handleChange} name="Mobile" /></dd>
                    <dd className="text-danger">{formik.touched.Mobile && formik.errors.Mobile }</dd>
                    <dt>City</dt>
                    <dd>
                        <select onChange={formik.handleChange} name="City">
                            <option value="-1">Select City</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Hyderabad">Hyderabad</option>
                        </select>
                    </dd>
                    <dd className="text-danger">{formik.touched.City && formik.errors.City}</dd>
                </dl>
                <button disabled={(formik.isValid)?false:true} type="submit">Register</button>
                <button  className={`mx-2 ${(formik.dirty)?'d-inline':'d-none'}`}>Save</button>
            </form>
        </div>
    )
}