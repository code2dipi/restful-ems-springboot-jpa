import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class UpdateEmployeeInfoComponent extends Component {
    constructor(props) {
        //Setting properties in constructor
        super(props)
        this.state = {
            id:this.props.match.params.id, //get id from route
            firstName: '',
            lastName: '',
            emailId: ''
    
        }
        //binding event handler in the constructor
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);


    }
        componentDidMount(){
            //calling service method
            EmployeeService.getEmployeeByID(this.state.id) // id from consturctor
            .then(res=>{ //return promise ....lets get data from response
             let employee=res.data;
             this.setState({firstName:employee.firstName,
                            lastName:employee.lastName,
                            emailId:employee.emailId
             });
            });                 
        }
 
    updateEmployee = (event) => {
        event.preventDefault();
        //adding data to the object
        let employee = { firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId }; // updated data 
        console.log('employee=>' + JSON.stringify(employee));

        EmployeeService.updateEmployee(employee,this.state.id).then(res=>{
            this.props.history.push('/employees');
        });
       /*  EmployeeService.createEmployee(employee).then((res)=>{
            this.props.history.push('/employees');
        });*/
    }
        //Event handler methods
        changeFirstNameHandler = event => this.setState({ firstName: event.target.value });
        changeLastNameHandler = event => this.setState({ lastName: event.target.value });
        changeEmailIdHandler = event => this.setState({ emailId: event.target.value });
    
        saveEmployee = (event) => {
            event.preventDefault();
            //adding data to the object
            let employee = { firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId };
            console.log('employee=>' + JSON.stringify(employee));
            // call employee service here. post method returns promise make rest call then navigate to employee page
            EmployeeService.createEmployee(employee).then(res=>{ 
                    //once we submitt the data navigate to the employee list pages
                     this.props.history.push("/employees");
            });
        }

    cancel(){
        this.props.history.push('/employees');// once clikc cancell buttion navigate to the  employees..listemployee component will will be rendered on this url
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h2 className="text-center">Edit Employee</h2>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>First Name:</label>
                                        <input placeholder="First Name" name="firstName" className="form-control"
                                            value={this.state.firstName} onChange={this.changeFirstNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Last Name:</label>
                                        <input placeholder="Last Name" name="lastName" className="form-control"
                                            value={this.state.lastName} onChange={this.changeLastNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Email Id:</label>
                                        <input placeholder="Email" name="emailId" className="form-control"
                                            value={this.state.emailId} onChange={this.changeEmailIdHandler} />
                                    </div>
                                    <button className="btn btn-success" onClick={this.updateEmployee}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)}
                                        style={{ marginLeft: "10px" }}>Cancel</button>
                                </form>


                            </div>

                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default UpdateEmployeeInfoComponent;