import React, {Component} from 'react'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import About from "../screens/AboutScreen";
import Submit from "../screens/SubmitScreen.js";


const NavMenu = () => {
    return(
        <Router>
          <Switch>
          <Navbar style={{backgroundColor:'black', boxShadow: '0px 4px 5px #1f1f1f75'}} collapseOnSelect expand="lg"  variant="dark">
         <Navbar.Brand style={styles.logo} href="/">Sable Vue</Navbar.Brand>
       
       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
       <Navbar.Collapse id="responsive-navbar-nav">
         <Nav className="mr-auto">
           
                {/* <Nav.Link href="/submit">Submit Business</Nav.Link> */}
                
           
         </Nav>
              <Nav>
            
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/submit">Submit</Nav.Link>
                <Nav.Link href="/wishlist">Wishlist</Nav.Link>
                
          
         </Nav>
       </Navbar.Collapse>
     </Navbar>

  
     </Switch>
    </Router>

    
       
    );
}
const styles = {


  logo: {
      margin:5,

fontFamily: 'Poiret One, cursive',
zIndex:1,
    textAlign: 'center',

  },






}




//react external links

export default NavMenu