import React from 'react';
import Employee from './employee';
import EmployeeInformtionModal from './employeeInformtionModal';
export default class Employees extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            single: [],
            open_modal: false
        };
    }

    handle_click = (item) => {
        this.setState({
            isLoaded: true,
            single: item, 
            open_modal: true}
        )
    }

    HandleClose = () => {
        this.setState({ open_modal: false })
    }

    componentDidMount() {
        fetch("https://reqres.in/api/users?page=1")
            .then(res => res.json())
            .then(
                (result) => {
                    var employeeList = result.data
                    this.setState({
                        items: employeeList,
                        isLoaded: true
                    })
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    <table class="table table-sm table-striped">
                        <thead>
                            <tr>
                                <th>Avatar</th>
                                <th>Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        {items.length > 0 &&
                            <tbody>
                                {items.map(item => (
                                    <Employee key={item.id} item={item} handleClick={this.handle_click}/>
                                ))}
                            </tbody>
                        }  
                        
                    </table>

                    <EmployeeInformtionModal open={this.state.open_modal} single={this.state.single} handleClose={this.HandleClose} />
                </div>
            );
        }
    }
}