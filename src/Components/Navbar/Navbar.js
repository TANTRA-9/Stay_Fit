import React, { Component } from 'react';
import { Navbar, Nav,NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faHeart, faList, faUser, faPlus } from '@fortawesome/free-solid-svg-icons';
import fire from '../../Fire';

class nav extends Component {

    cl = () => {
        fire.auth().signOut();
        localStorage.clear();
    }

    render() {
        return (
            <div>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" />
                <Navbar bg="dark" expand="lg" variant="dark" fixed={this.props.fix}>
                    <Navbar.Brand href="/"><FontAwesomeIcon icon={faHeart} /> Stay-Fit</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/"><FontAwesomeIcon icon={faHome} /> Home</Nav.Link>
                            <Nav.Link href="/create"><FontAwesomeIcon icon={faPlus} /> Add Hospital</Nav.Link>
                            <NavDropdown title={<span><FontAwesomeIcon icon={faList} /> Lists</span>} id="basic-nav-dropdown">
                            <NavDropdown.Item href="/list">Hospitals List</NavDropdown.Item>
                            <NavDropdown.Item href="/registration">Registrations List</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                        <Nav>
                            {localStorage.getItem('login') ?
                                <Nav.Link onClick={this.cl} href="/login"><FontAwesomeIcon icon={faUser} /> Logout</Nav.Link> :
                                <Nav.Link href="/login"><FontAwesomeIcon icon={faUser} /> Login</Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default nav;