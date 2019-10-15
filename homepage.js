// import '.css/jquery.dataTables.css'
import React from 'react'
import MUIDataTable from "mui-datatables";
import axios from 'axios';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
// import { withSwalInstance } from 'sweetalert2-react';
// import swal from 'sweetalert2';
// import SweetAlert from 'sweetalert2-react';
// import App2 from "./App2.js"
// import {Tbl} from "./Tbl";
import { browserHistory } from 'react-router'





class Report1 extends React.Component {
    constructor(props) {
        super(props);

        Report1.handleClick = Report1.handleClick.bind(this);
    }
    //change theme
    getMuiTheme = () => createMuiTheme({
        overrides: {
          MUIDataTableBodyCell: {
            root: {
              backgroundColor: "lightBlue"
            }
          }
        }
      })

    componentWillMount() { }
    static handleClick(e) {
        alert("parent td#id: " + e.target.parentNode.id);
    }

    state = {
        data: []
    };
    componentDidMount() {
        axios
            .get("http://localhost/new_phonebook/contacts.php")
            .then(response => {
                this.setState({
                    data: response.data
                });
                console.log(response);
            })
            .catch(error => {
                // handle error
                console.log(error);
            });
    }

                handleFormSubmit( event ) {
                    event.preventDefault();
                    window.localStorage.getItem("name")
                    const path = '/signup'
                    browserHistory.push(path)

                }
                handleFormLogin( event ) {
                event.preventDefault();

                window.localStorage.getItem("name")
                const path = '/loginPage'
                browserHistory.push(path)

                }
    render() {
        const columns = [
            {
                name: "name",
                label: "Name",
                options: {
                 filter: true,
                 sort: true,
                }
               },
               {
                name: "email",
                label: "Email",
                options: {
                 filter: true,
                 sort: true,
                }
               },
               {
               name: "city",
               label: "City",
               options: {
                filter: true,
                sort: true,
               }
              },
              {
                name: "job",
                label: "Job",
                options: {
                 filter: true,
                 sort: true,
                }
               },
               {
                name: "country",
                label: "Country",
                options: {
                 filter: true,
                 sort: true,
                }
               },
               {
                name: "password",
                label: "Password",
                options: {
                 filter: true,
                 sort: true,
                }
               },
               
            
        
            
            
        ];
        //const action = <Button onClick={Report1.handleClick}>Action</Button>; /* <-- action button */
        const data = this.state.data;
        const options = {
            filterType: "dropdown",
            responsive: "stacked",
            selectableRows: false //clears the checkboxes from default theme

            /*  customToolbarSelect: (selectedRows) => <CustomToolbarSelect selectedRows={selectedRows} />*/
        };

        return (
            <div className="report-view data-table-wrapper">

          <MuiThemeProvider theme={this.getMuiTheme()}>
                <MUIDataTable
                    title={"Contact Management"}
                    data={data}
                    columns={columns}
                    options={options}
                />
                </MuiThemeProvider>
                  <div className="glory">
                 <input type="submit" onClick={e => this.handleFormSubmit(e)} value="SignUp" />
                 <input type="submit" onClick={e => this.handleFormLogin(e)} value="Login" />
                </div>
                <signup />
            </div>
        );
    }
}

 export default Report1;




// export default class Calculate extends Component {

//   state = {
//     contacts: []
//   }

//   componentDidMount() {
//     const url = 'http://localhost/new_phonebook/contacts.php';
//     axios.get(url).then(response => response.data)
//     .then((data) => {
//       this.setState({ contacts: data })
//       console.log(this.state.contacts)
//      })
     
//   }

//   handleFormSubmit( event ) {
//     event.preventDefault();
//     window.localStorage.getItem("name")
//     const path = '/signup'
//     browserHistory.push(path)

// }
// handleFormLogin( event ) {
//   event.preventDefault();

//   window.localStorage.getItem("name")
//   const path = '/App2'
//   browserHistory.push(path)

// }

  
//   render () {
//     return (
//       <div>
        
             
//       <h1>Contact Management</h1>
//       <table border='1' width='100%' id="contactstable" >
//           <thead>
//       <tr>
//           <th>ID</th>
//           <th>Name</th>
//           <th>Email</th>
//           <th>Country</th>
//           <th>City</th>
//           <th>Job</th> 
//           <th>Password</th>    
//       </tr>
//       </thead>
//       {/* <Tbl> */}
//        {this.state.contacts.map((contact) => (
//           <tbody>
//       <tr>
//           <td>{ contact.ID }</td>
//           <td>{ contact.name }</td>
//           <td>{ contact.email }</td>
//           <td>{ contact.country }</td>
//           <td>{ contact.city }</td>
//           <td>{ contact.job }</td>
//           <td>{ contact.password}</td>
//       </tr>
//       </tbody>
    
//       ))}
//       {/* </Tbl> */}
//       </table>
      
//          <div className="glory">
//           <input type="submit" onClick={e => this.handleFormSubmit(e)} value="SignUp" />
//           <input type="submit" onClick={e => this.handleFormLogin(e)} value="Login" />
//        </div>
//       {/* <Tbl data = {this.contact}></Tbl> */}
//       <signup />
//       <button onClick={() => this.setState({ show: true })}>Alert</button>
//       <SweetAlert
//         show={this.state.show}
//         title="Demo"
//         text="SweetAlert in React"
//         type="success"
//         onConfirm={() => this.setState({ show: false })}
//       />
//       {/* <App2/> */}
//       </div>


//     )
//   }




  

// }

// class InputBox extends React.Component{
//   render() {
//     return <div className={'input-field'}>
//       <input type={this.props.type} value={this.props.value} name={this.props.name} id={this.props.id} />
//     </div>
//   }
// }


// class CalculateButton extends React.Component{
//   result () {
//     var firstNum = document.getElementById('firstNum').value
//     var secondNum = document.getElementById('secondNum').value
//     var sum = Number(firstNum) + Number(secondNum)
//     if (sum !== undefined) {
//       const path = '/App2'
//       browserHistory.push(path)
//     }
//     window.localStorage.setItem('sum', sum)
//     return console.log(sum)
//   }
//   render() {
//     return <div className={'calculate-button'}>
//       <button type={this.props.type} value={this.props.value} name={this.props.name} onClick={this.result} >
//               Calculate
//       </button>
//     </div>
//   }
// }


