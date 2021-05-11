import { ErrorMessage, Field, Form, Formik } from "formik";
import React,{ Component } from "react";
import EmployeeService from "./Service/EmployeeService";

class EmployeeComp extends Component{
    constructor(props){
        super(props)
        this.state={
            id:'',
            firstName:'',
            lastName:''
        }
        this.save=this.save.bind(this);
    }
    componentDidMount(){
        if(this.props.match.params.id){
        EmployeeService.getEmployeeById(this.props.match.params.id).then(
            response=>(
                this.setState({
                    id:response.data.id,
                    firstName:response.data.firstName,
                    lastName:response.data.lastName
                })
            )
            
        )
            }
    }
    save(values){
        const Employee={firstName:values.firstName, lastName:values.lastName}
        if(this.props.match.params.id){
            EmployeeService.update(this.props.match.params.id, Employee).then(
            response=>this.props.history.push("/employee")
            )
        }else{
            EmployeeService.addEmployee(Employee).then(

                response=> this.props.history.push("employee")
            )
        }
    }
    validate(values){
        const error={}
        if(!values.firstName){
            error.firstName="Enter firstName";
        }else if(values.firstName.length<5){
            error.firstName="Minimum 5 characters required";
        }
        if(!values.lastName){
            error.lastName="Enter lastName";
        }else if(values.lastName.length<5){
            error.lastName="Minimum 5 characters required";
        }
        return error;
    }
    render(){
        const {id, firstName, lastName}=this.state
        return(<div>

            <Formik
            initialValues={{id, firstName, lastName}}
            enableReinitialize
            onSubmit={this.save}
            validate={this.validate}>
                <Form>
                <table>
                    <tbody>
                    <tr>
                        <td><label>First Name: </label></td>
                        <td><Field type="text" name="firstName" autoComplete='off'></Field></td>
                        <td className='error'><ErrorMessage name='firstName'></ErrorMessage></td>
                    </tr>
                    <tr>
                        <td><label>Last Name: </label></td>
                        <td><Field type="text" name="lastName" autoComplete='off'></Field></td>
                        <td className='error'><ErrorMessage name='lastName'></ErrorMessage></td>
                    </tr>
                    </tbody>
                </table>
                <button type="submit" className='btn btn-success'>Save</button>
                </Form>
            </Formik>
        </div>)
    }

}
export default EmployeeComp;