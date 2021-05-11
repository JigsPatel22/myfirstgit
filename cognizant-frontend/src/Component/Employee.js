import React,{ Component } from "react";
import EmployeeService from "./Service/EmployeeService";

class Employee extends Component{

    constructor(props){
        super(props)
        this.state=({
            Employee:[]
        })
        this.delete=this.delete.bind(this);
    }
    componentDidMount(){
        
        EmployeeService.getAllEmployee().then(response=>{
            this.setState({
                Employee:response.data
            })
           
        }

        )
    }
    update(id){
       this.props.history.push(`/update/${id}`)
    }
    delete(id){
        EmployeeService.deletebyId(id).then(re=>{
        EmployeeService.getAllEmployee().then(response=>{
            
            this.setState({
                Employee:response.data
            })
        })})

    
}
    render(){
        return(<div>
            <h3>Employee List</h3>
            <table className='table table-striped'>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>First_Name</th>
                    <th>Last_Name</th>
                    <th>Update</th>
                    <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                {
                    this.state.Employee.map(
                        employee=>
                        
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td><button onClick={()=>this.update(employee.id)} className='btn btn-primary'>Update</button></td>
                                <td><button onClick={()=>{if(window.confirm(`Do you want to delete Id: ${employee.id}`))this.delete(employee.id)}} className='btn btn-danger'>Delete</button></td>
                            </tr>
                           
                    )
                }
                 </tbody>
            </table>
        <button onClick={()=>this.props.history.push("add")} className='btn btn-success'>Add new Employee</button>
        </div>
            )
    }
}
export default Employee;