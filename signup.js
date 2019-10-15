import React from 'react';
import { browserHistory } from 'react-router';
import swal from 'sweetalert2';
import SweetAlert from 'sweetalert2-react';
import axios from 'axios';
// import Swal from 'sweetalert2';
class signup extends React.Component {
    constructor(props){
        super(props);
        
    this.state = {
        ID:'',
        name: '',
        email: '',
        country: '',
        city: '',
        job: '',
        password:'',
        file: null

        
        
    }
     //image code starts here
    this.onChange = this.onChange.bind(this)

    }
   
    onChange(e){
        this.setState({file:e.target.files[0]})
    }

//image code ends here
    
   
    handleFormLogin( event ) {
    event.preventDefault();
   
  
    window.localStorage.getItem("name")
    const path = '/'
    browserHistory.push(path)
  
  }
  
  
    handleFormSubmit( event ) {
       event.preventDefault();
       swal.showLoading()//call sweet alert loader onclick function

       let file =this.state.file;

        let name = this.state.name;
        let email = this.state.email;
        let country = this.state.country;
        let city = this.state.city;
        let job = this.state.job;
        let password = this.state.password;
        let repassword = this.state.repassword;

       
       
  
        let formData = new FormData();
        formData.append('id', this.state.id)
        formData.append('name', this.state.name)
        formData.append('email', this.state.email)
        formData.append('city', this.state.city)
        formData.append('country', this.state.country)
        formData.append('job', this.state.job)
        formData.append('password', this.state.password)
        formData.append('repassword', this.state.repassword)
        formData.append("avatar",file)
         
        // console.log(this.state.selectedFile.name)

        if (name==''){
            alert("Re-enter Name")
            return
        }
        else if (email==''){
            alert("Re-enter Email")
            return
        }
        else if (city==''){
            alert("Re-enter City")
            return
        }
        else if (country==''){
            alert("Re-enter Country")
            return
        }
        else if (job==''){
            alert("Re-enter Job")
            return
        } else if (password==''){
            alert("Re-enter Password")
            return
        }
        else if (password==repassword){
            swal.fire("Good Job","Password Matches","success")
            
        }
        else{
            swal.fire("Oops","You Need to Signup Again with Correct details","error")
            
            
        }
  
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
           
            swal.close()//dismiss sweetalert loader after handle success
            swal.fire("Great","Successfully Signed In","success").then(result=>{
                if(result.value){
                    const path = '/'
                    browserHistory.push(path)
                }//redirects you to the home page
            })
           
            console.log(response)
  
        })
        .catch(function (response) {
            //handle error
          
            console.log(response)
  
        });
     // }
    }
   
  
    render(){
        return (
            <div>

        <form className="container">
            <div className="row">
                <div className="col-25">
                    <label>Name</label>
                </div>
                <div className="col-75">
                <input type="text" name="name" value={this.state.name}
                onChange={e => this.setState({ name: e.target.value })}/>
                </div>
            </div>
            <div className="row">
                <div className="col-25">
                    <label>Email</label>
                </div>
                <div className="col-75">
                <input type="text" name="email" value={this.state.email}
                onChange={e => this.setState({ email: e.target.value })}/>
                </div>
            </div>
            <div className="row"> 
                <div className="col-25">
                    <label>Country</label>
                </div>
                <div className="col-75">
                <input type="text" name="country" value={this.state.country}
                onChange={e => this.setState({ country: e.target.value })}required/>
                </div>
            </div>
            <div className="row">
                <div className="col-25">
                    <label>City</label>
                </div>
                <div className="col-75">
                <input type="text" name="city" value={this.state.city}
                onChange={e => this.setState({ city: e.target.value })}required/>
                </div>
            </div>
            <div className= "row">
                <div className="col-25">
                    <label>Job</label>
                </div>
                <div className="col-75">
                <input type="text" name="job" value={this.state.job}
                onChange={e => this.setState({ job: e.target.value })}/>
                </div>
            </div>
            <div className="row">
                <div className="col-25">
                    <label>Password</label>
                </div>
                <div className="col-75">
                <input type="password" name="password" value={this.state.password}
                onChange={e => this.setState({ password: e.target.value })}/>
                </div>
            </div>
            <div className="row">
                <div className="col-25">
                    <label>Re-enter Password</label>
                </div>
                <div className="col-75">
                <input type="password" name="repassword"placeholder="Re-enter Password" value={this.state.repassword}
                onChange={e => this.setState({ repassword: e.target.value })}/>
                </div>
            </div>
 
             <div className="row">
                 <div className="col-25">
                    <label>Upload Image</label>
                 </div>
                <div className="col-75">                
                <input type="file" name="image"onChange={ this.onChange }/>
                 </div>
             </div>


            {/* <div className="row">
                <div className="col-25">
                    <label>Upload Imgae</label>
                </div>
                <div className="col-75">
                <input type="file" name="image"value={this.state.image}
                onChange={this.fileSelectedHandler}/>
                </div>
            </div> */}
            
                <br></br>
  
            <input type="submit" onClick={e => this.handleFormSubmit(e)} value="Create Contact" />
            <input type="submit" onClick={e => this.handleFormLogin(e)} value="Home Page" />
            
        </form>
        
        {/* <button onClick={() => this.setState({ show: true })}>Alert</button>
      <SweetAlert
        show={this.state.show}
        title="Demo"
        text="SweetAlert in React"
        type="success"
        onConfirm={() => this.setState({ show: false })}
      /> */}

      </div>
        
        );
    }
  }

export default signup;
