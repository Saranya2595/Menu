import React, { Component } from 'react';

class Login extends Component {

   constructor(props) {
      super(props);
      this.state = { username: '', password:'' };
      this.username="saranya";
      this.password="8734";
    }
   

   handleInputChange(e,attrib) {
      this.setState({ [e.target.name]: e.target.value });
    }

   login(){
      if(this.state.username==this.username && this.state.password==this.password){
         this.props.history.push("home");
      }else{
         alert("Invalid Credentials");
      }
   }
   render() {
      return (
         <div>
            <h2>Login</h2>
            <div className="loginForm">
               <input type="text" 
               name="username" 
               placeholder="username"
               onChange={(e)=>this.handleInputChange(e)}
               value={this.state.username}></input>

               <input type="password" 
               name="password" 
               placeholder="password"
               onChange={(e)=>this.handleInputChange(e)}
               value={this.state.password}></input>

               <button onClick={()=>this.login()}>LOGIN</button>
            </div>
         </div>
      );
   }
}
export default Login;