import React, { Component } from 'react'
import { browserHistory } from 'react-router'

export default class Result extends Component {

  constructor(props) {
    super(props)
    //this takes you back to the home page when you try accessing other pages without loggin in at runtime
    const bounce = window.localStorage.getItem('name')
      if(!bounce){
      const path ='/'
      browserHistory.push(path)
    }

    const img = window.localStorage.getItem('image')
}

handleFormLogout( event ) {
  event.preventDefault();

  window.localStorage.removeItem("name")
  const path = '/'
  browserHistory.push(path)

}
handleFormLogin( event ) {
  event.preventDefault();

  // window.localStorage.getItem("name")
  const path = '/'
  browserHistory.push(path)

}
  render () {
    const img = window.localStorage.getItem('image')
    return (
      <div className={'result-page'} > 
        {/* <marquee>
          <h2>You are logged In
            </h2></marquee> */}

         <h1 style={{color: "blue"}}>Welcome : </h1>
        <DisplayNumber id='name' />
        <DisplayNumber id='email' />
        <DisplayNumber id='country' />
        <DisplayNumber id='city'/>
        <DisplayNumber id='job' />
        <img src={img}/>
      
        <div className="great">
          <input type="submit" onClick={e => this.handleFormLogout(e)} value="Logout" />
          <input type="submit" onClick={e => this.handleFormLogin(e)} value="Home Page" />
        </div>
      </div>
    )
  }
}

class DisplayNumber extends React.Component{
  componentDidMount () {
    document.getElementById('name').innerHTML = window.localStorage.getItem('name')
    document.getElementById('email').innerHTML = window.localStorage.getItem('email')
    document.getElementById('country').innerHTML = window.localStorage.getItem('country')
    document.getElementById('city').innerHTML = window.localStorage.getItem('city')
    document.getElementById('job').innerHTML = window.localStorage.getItem('job')
    // document.getElementById("image").innerHTML = window.localStorage.getItem('image')
  }
  
  render() {
    return (
      <div className={'display-number'}>
        <p id={this.props.id} />
        <img src={this.props.image}/>
        {/* <p>fghfdhd</p> */}
      </div>
    )
  }
  }
