import React, { Component } from 'react';
import axios from 'axios';
import loginPage from "./loginPage"
// import { Switch, Route} from 'react-router';
// import { Router, Route, browserHistory } from 'react-router'
import { SweetAlert} from 'sweetalert2-react';
import swal from 'sweetalert2';

class ContactForm extends React.Component {
    state = {
        ID:'',
        name: '',
        email: '',
        country: '',
        city: '',
        job: '',
        password:'',
        
    }


    handleFormSubmit( event ) {
        event.preventDefault();

        let formData = new FormData();
        formData.append('id', this.state.id)
        formData.append('name', this.state.name)
        formData.append('email', this.state.email)
        formData.append('city', this.state.city)
        formData.append('country', this.state.country)
        formData.append('job', this.state.job)
        formData.append('password', this.state.password)

        axios({
            method: 'post',
            url: 'http://localhost/new_phonebook/signup.php',
            data: formData,
            config: { headers: {'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Accept': 'application/json', }}
        })
        .then(function (response) {
            //handle success
            // this.props.history.push('/users')
            //history.push('/users')
            //history.push(location)
            console.log(response)

        })
        .catch(function (response) {
            //handle error
            console.log(response)
        });
    }


    render(){
        return (
            <div>
               <form>

                    <label>Name</label>
                    <input type="text" name="name" value={this.state.name}
                        onChange={e => this.setState({ name: e.target.value })}/>

                    <label>Email</label>
                    <input type="email" name="email" value={this.state.email}
                        onChange={e => this.setState({ email: e.target.value })}/>

                    <label>Country</label>
                    <input type="text" name="country" value={this.state.country}
                        onChange={e => this.setState({ country: e.target.value })}/>

                    <label>City</label>
                    <input type="text" name="city" value={this.state.city}
                        onChange={e => this.setState({ city: e.target.value })}/>

                    <label>Job</label>
                    <input type="text" name="job" value={this.state.job}
                        onChange={e => this.setState({ job: e.target.value })}/>

                    <label>Password</label>
                    <input type="password" name="password" value={this.state.password}
                        onChange={e => this.setState({ password: e.target.value })}/>


                    <input type="submit" onClick={e => this.handleFormSubmit(e)} value="Create Contact" />
                    </form>
            </div>
            
     );
    }
}

export default class Home extends Component {
    state = {
        contacts: []
      }

      componentDidMount() {
        const url = 'http://localhost/new_phonebook/contacts.php';
        axios.get(url).then(response => response.data)
        .then((data) => {
          this.setState({ contacts: data })
          console.log(this.state.contacts)
         })
      }

      
      render() {
        return (
            <React.Fragment>
         
               
            <h1>Contact Management</h1>
            <table border='1' width='100%' >
                <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Country</th>
                <th>City</th>
                <th>Job</th> 
                <th>Password</th>    
            </tr>
            </thead>
    
            {this.state.contacts.map((contact) => (
                <tbody>
            <tr>
                <td>{ contact.id }</td>
                <td>{ contact.name }</td>
                <td>{ contact.email }</td>
                <td>{ contact.country }</td>
                <td>{ contact.city }</td>
                <td>{ contact.job }</td>
                <td>{ contact.password}</td>
            </tr>
            </tbody>
            ))}
            </table>
            <ContactForm />
            <loginPage />
            </React.Fragment>
        );
      }
}

