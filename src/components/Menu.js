import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
   render() {
      return (
         <div>
            <Link className="App-link" to={'home'}>Home</Link> |
            <Link className="App-link"to={'about'}>About</Link> |
            <Link className="App-link" to={'login'}>Logout</Link> 
         </div>
      );
   }
}
export default Menu;