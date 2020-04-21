import React, { Component } from 'react'
import { Formik} from 'formik'
import '../stylesheet/SignUpForm.css'

class SignUpFrom extends Component {
    
    render() {
        return (
            <Formik className="SignUpFormFormik"
                initialValues={{
                    username:"",
                    password:"",
                    passwordRepeat:""
                }}
                onSubmit={values => console.log(values)}
                >
                {
                ({values, handleChange, handleSubmit}) => (
                        <form className="SignForm" onSubmit={handleSubmit}>
                            <label className="SignFormLabel">
                                user name:
                                <input
                                    className="SignFormInput"
                                    type="text"
                                    name="username"
                                    value={values.username}
                                    onChange={handleChange}
                                />
                            </label>
                            <label className="SignFormLabel">
                                Password:
                                <input
                                    className="SignFormInput"
                                    type="password"
                                    name="password"
                                    value={values.password}
                                    onChange={handleChange}
                                />
                            </label>
                            <label className="SignFormLabel">
                                Password (repeat):
                                <input
                                    className="SignFormInput"
                                    type="password"
                                    name="passwordRepeat"
                                    value={values.passwordRepeat}
                                    onChange={handleChange}
                                />
                            </label>
                            <button className="SignFormbtn" type="submit">Sign Up</button>
                        </form>
                    )}
                </Formik>
        )
    }
}



export default SignUpFrom