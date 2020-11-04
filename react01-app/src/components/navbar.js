import React from 'react';
import {Navbar,Nav,Container} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function Manu(){
    return(
        <Navbar bg="primary" variant="dark">
            <Container>
                <Nav className="mr-auto">
                    <NavLink to="/HomeScreen" className="text-white">Home</NavLink>
                    <NavLink to="/CategoryScreen" className="text-white">Category</NavLink>
                    <NavLink to="/AboutUs" className="text-white">About Us</NavLink>
                </Nav>
            </Container>
        </Navbar>
    );
}
export default Manu;