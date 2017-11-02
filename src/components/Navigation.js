import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navigation extends Component {
   render() {
      return ( 
         <div>
            <p> Navigation .. </p>
               <ul>
                  <li><Link to='/'> Home </Link></li>
                  <li><Link to='/config'> Config </Link></li>
               </ul>
            <hr/>
         </div>
      )
   }
}
