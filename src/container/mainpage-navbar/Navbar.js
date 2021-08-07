import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import './navbar.css';
class BootstrapNavbar extends React.Component {
    state = {
        userdata: null
    }
    async componentDidMount() {
        if (this.props.userdata) {
            await this.setState({ userdata: this.props.userdata })
        }
        else {
            await this.setState({ userdata: null })
        }
    }
    signout = () => {
        localStorage.clear();
        window.location.reload(true);
    }
    render() {
        let content;
        if (this.state.userdata) {
            content = (
                <React.Fragment>
                    {/* <Form inline>
                        <Button className=" searchb" variant="outline-success">Search</Button>
                        <FormControl type="text" placeholder="Search" className="ml-3 search" style={{width}}/>

                    </Form> */}
                    <Nav className="ml-auto">
                        {/* <NavLink to="/main" exact activeClassName="selected" className="text-white font-weight-bold h5 navlink" activeStyle={{
                            borderBottom: '2px solid #e7032c',
                            textDecoration: 'none'
                        }}>Home</NavLink> */}


                        <NavDropdown title={this.state.userdata.fname} id="basic-nav-dropdown" className=" drop text-white font-weight-bold h5 navlink">
                            <NavDropdown.Item>Settings</NavDropdown.Item>
                            <NavDropdown.Item><span onClick={this.signout}>Sign Out</span></NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </React.Fragment>
            )
        }
        else {
            content = (
                <Nav className="ml-auto login">
                    <NavLink to="/ln" className="mr-2 h4 text-danger">Login</NavLink>
                    <span className="lin" style={{ width: '2px', height: '30px', backgroundColor: 'whitesmoke' }}></span>
                    <NavLink to="/sn" className="ml-2 mr-3 h4 text-danger">SignUp</NavLink>
                </Nav>

            );
        }
        return (

            <Navbar className='navbck' sticky="top">
                <Navbar.Brand className="brandname mr-0">APEX MOVIES</Navbar.Brand>
                {content}
            </Navbar>
        )
    }
}

export default BootstrapNavbar;