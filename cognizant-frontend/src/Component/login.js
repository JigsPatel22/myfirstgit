
import { Field, Form, Formik } from "formik";
import React,{ Component } from "react";

import LoginService from "./Service/LoginService";
//import { Link } from "react-router-dom";

class Login extends Component{
    constructor(props){
        super(props)
        this.state=({
            error:null
        })
        this.validate=this.validate.bind(this)
    }


    validate(values){
        const credential={
            username:values.username,
            password:values.password
        }
        LoginService.validate(credential).then(
            response=>{
                sessionStorage.setItem('un', credential.username)
                LoginService.onLogin(response.data.token)
                this.props.history.push('/employee')
                
            }
        ).catch(
            error=>{
                var err='';
                if(error.data){
                    err+=error.data;
                }
                if(error.response && error.response.data){
                    err+=error.response.data;
                }

               this.setState({
                   error:err

               }
               )
            }
        )
        
    }
    render(){
        return(<div>
            {!(this.state.error==null)&&<i>{this.state.error}</i>}
            
            <Formik
            initialValues={{username:'',password:''}}
            onSubmit={this.validate}>
                <Form >
                    <table className='tab'>
                        <tbody>
                            <tr>
                                <td><label>UserName:</label></td>
                                <td><Field type="text" name="username" autoComplete='off'></Field></td>
                            </tr>
                            <tr>
                                <td><label>Password:</label></td>
                                <td><Field type="password" name='password'></Field></td>
                            </tr>
                            <tr >
                                <td colSpan='2'><button type="submit" className='btn btn-success'>Login</button></td>
                            </tr>
                        </tbody>
                    </table>
                
                
                
                
                
                </Form>
            </Formik>
        
        
        
        </div>
        );
    }
}
export default Login;