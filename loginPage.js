import React from 'react';
import axios from 'axios';
import'./App.css';
import { browserHistory } from 'react-router';
import { SweetAlert} from 'sweetalert2-react';
import swal from 'sweetalert2';

const CardList = (props) => (
	<div>
    {/* <ul> {props.profiles.map(profile => <li key={profile}> {profile.name}</li>)}</ul> */}
    {props.profiles.map(profile => <Card key={profile.email} {...profile}/>)}
	</div>
);

class Card extends React.Component {
	render() {
  	const profile = this.props;
  	return (
    	<div className="github-profile">
        <div className="info">
          <div className="company">Name{''}:{''}{profile.name}</div>
          <div className="name">Email{''}:{''}{profile.email}</div>
          <div className="company">City{''}:{''}{profile.city}</div>
          <div className="name">Country{''}:{''}{profile.country}</div>
          <div className="company">Job{''}:{''}{profile.job}</div>
          <div className="company">Password{''}:{''}{profile.password}</div>
          <hr/>
        </div>
    	</div>
    );
  }
}

class Form extends React.Component {
  state = { id: '',
email:''
};
	handleSubmit = async (event) => {
    event.preventDefault();
    swal.showLoading()


    //passing data through the urlusing php format

    const response = await axios.get(`http://localhost/new_phonebook/filters.php?email=${this.state.email}&password=${this.state.password}`);
    //const resp = await axios.get(`http://localhost/filters.php?email=${this.state.email}`);
    this.props.onSubmit(response.data);
    console.log(response.data)
    this.title = response.data.name
    const email = response.data.email;//gets posted email from the database
    const password = response.data.password;
    const name =response.data.name;
    const job = response.data.job;
    const city = response.data.city;
    const country=response.data.country;
    const image=response.data.image_tmp;

    console.log(image)

    if(email===undefined && password===undefined){
    
      swal.fire("Oops","You have entered a wrong email or password","error")
      return
   
      //  <SweetAlert
      //       show={this.state.show}
      //       title="Demo"
      //       text="SweetAlert in React"
      //       type="error"
      //       onConfirm={() => this.setState({ show: false })}
      //     />
        
    }
    else{
      // swal.fire("Good job","you have logged in sucessfully" ,"sucess")
      swal.close()

      // console.log("Logged In")

      
      window.localStorage.setItem('name',name)
      window.localStorage.setItem('email',email)
      window.localStorage.setItem('country',country)
      window.localStorage.setItem('city',city)
      window.localStorage.setItem('job',job)
      window.localStorage.setItem('image',image)
      const path = '/result'
      browserHistory.push(path)

    }
    this.setState({ password: '' , email:''});
    

  };

	render() {
  	return (
        <div className="container">
          
        <form onSubmit={this.handleSubmit}>
          <div>
          <input 
          type="text" 
          name="email"
          value={this.state.email}
          onChange={event => this.setState({ email: event.target.value })}
          placeholder="Email address" 
           
        />
          </div>
          <div>
            <input 
            type="password" 
            name="password"
            value={this.state.password}
            onChange={event => this.setState({ password: event.target.value })}
            placeholder="Enter Password" 
            
          /> 

          </div>
          <div>
            <button className="button"> Login </button>
          </div>
    	  </form>
      </div>
  
    	
    );
  }
}

class loginPage extends React.Component {
  state = {
    profiles: [],
  };
  addNewProfile = (profileData) => {
  	this.setState(prevState => ({
    	profiles: [...prevState.profiles, profileData],
    }));
  };
	render() {
  	return (
    	<div>
         {/* <button onClick={() => this.setState({ show: true })}>Alert</button>
           <SweetAlert
            show={this.state.show}
            title="Battle"
            text="SweetAlert in React"
            type = "error"
           onConfirm={() => this.setState({ show: false })}
        /> */}
    	  <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addNewProfile} />
        {/* <CardList profiles={this.state.profiles} /> */}
    	</div>
    );
  }	
}

export default loginPage;