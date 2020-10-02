import axios from 'axios';
// Rest Endpoint Url
//Making rest call to communicate with REST API asio make call actually
const EndPoint_API_URL="http://localhost:8080/api/v1/employees";
class EmployeeService{

    getEmployees(){
        return axios.get(EndPoint_API_URL);
    }
    createEmployee(employee){
        return axios.post(EndPoint_API_URL,employee);// 
    }
    getEmployeeByID(employeeID){
        return axios.get(EndPoint_API_URL+'/'+ employeeID);// 
    }
    updateEmployee(employee,employeeId){
        return axios.put(EndPoint_API_URL+'/'+ employeeId,employee);// 

    }

}
export default new EmployeeService()