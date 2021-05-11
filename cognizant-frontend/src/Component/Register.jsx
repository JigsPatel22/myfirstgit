import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { Component } from "react";

class Register extends Component {
    constructor(props){
        super(props);
        this.register=this.register.bind(this);
    }
    register(values){
        const user={
            username:values.username,
            password:values.password
        }
        axios.post('registerUser',user);
        this.props.history.push("/login")
    }
    validate(values){
        const errors={}
        if(values.username.length<5){
            errors.username='Enter Valid UserName'
        }
        if(values.username.length<5){
            errors.password='Enter Strong password'
        }
        return errors;

    }
    render() {
        return (
            <div>
                <Formik
                    initialValues={{ username: '', password: '' }}
                    validate={this.validate}
                    onSubmit={this.register}>
                    <Form>
                        <table>
                            <tbody>
                                <tr>
                                    <td><label>UserName:</label></td>
                                    <td><Field type="text" name="username" autoComplete='off'></Field></td>
                                    <td className='error'><ErrorMessage name='username' ></ErrorMessage></td>
                                </tr>
                                <tr>
                                    <td><label>Password:</label></td>
                                    <td><Field type="password" name='password'></Field></td>
                                    <td className='error'><ErrorMessage name='password'></ErrorMessage></td>
                                </tr>                               
                                <tr >
                                    <td colSpan='3'><button type="submit" className='btn btn-success'>Register</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </Form>
                </Formik>
            </div>
        )
    }

}
export default Register;