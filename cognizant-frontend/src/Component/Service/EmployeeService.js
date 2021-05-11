import axios from "axios";

class EmployeeService{
getAllEmployee(){
    return axios.get("cognizant/employees");
}
getEmployeeById(id){
    return axios.get(`cognizant/employees/${id}`);
}
addEmployee(emp){
    return axios.post(`cognizant/employees`,emp);
}
update(id, emp){
   
    return axios.put(`cognizant/employees/${id}`,emp);
}
deletebyId(id){
    return axios.delete(`cognizant/employees/${id}`);
}
}

export default new EmployeeService();