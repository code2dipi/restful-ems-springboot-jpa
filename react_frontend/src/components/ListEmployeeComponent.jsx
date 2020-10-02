import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: []
        }
        this.addEmployee=this.addEmployee.bind(this);
        this.updateEmployee=this.updateEmployee.bind(this);
    }
    // bind this method to the component 
    updateEmployee(id){
    this.props.history.push(`/update-employee/${id}`);// call update-employee page pass this id dynamically update employee page when user click update 
    }

    componentDidMount() {
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data })
        });
    }
    addEmployee(){
        this.props.history.push('/add-employee');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Employees Record</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addEmployee}>Add New Employee</button>
                </div>
                <div className="row">
                    <table className="table table-stripped table-bordered">

                        <thead>
                            <tr>
                                <th>Employee First Name</th>
                                <th>Employee Last Name</th>
                                <th>Employee Email Id</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                    employee =>
                                        <tr key={employee.id}>
                                            <td>{employee.firstName}</td>
                                            <td>{employee.lastName}</td>
                                            <td>{employee.emailId}</td>
                                           <td><button onClick={()=>this.updateEmployee(employee.id)} className="btn btn-primary btn-sm" >Update</button>
                                           <button type="button" class="btn btn-danger btn-sm"
                                           style={{ marginLeft: "10px" }}>Delete</button></td> 
                                        </tr>
                                )
                            }
                        </tbody>


                    </table>

                </div>
            </div>
        );
    }
}

export default ListEmployeeComponent;
