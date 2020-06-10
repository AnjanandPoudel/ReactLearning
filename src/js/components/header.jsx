import React,{Component} from 'react'
import { Navbar ,NavbarBrand,Nav,NavbarToggler,Collapse,NavItem } from 'reactstrap';
import {NavLink} from 'react-router-dom'



class Header extends Component{
    constructor(){
        super()
        this.state={
            isNavOpen:false,

        }
        this.toggleNav=this.toggleNav.bind(this)
    }

    toggleNav(){
        this.setState({
            isNavOpen:!this.state.isNavOpen
        })
    }

    render(){
    return(
        <div>
            <div className="header">
                <Navbar className="navbar-light" expand="md"> 
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-2 " href="/">
                            <h4>Anjan</h4>
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link menu white" to="/home" >
                                        <span className="fas fa-home fa-lg"></span> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link menu white" to="/menu" >
                                        <span className="fas fa-list fa-lg"></span> Menu
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link aboutus white" to="/about_us" >
                                        <i className="fas fa-info fa-lg"></i> About us
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link contact white" to="/contact_us" >
                                        <i className="fas fa-address-card fa-lg"></i> Contact us
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                
                <div className="jumbotron black" >
                    <div className="container ">
                        <div className="row row-header">
                            <div className="col-12 col-md-8">
                                <h1>Anjan Poudel</h1>
                                <p>This is  a paragraph. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, tenetur modi in consequuntur, doloremque sapiente illum quis maiores sequi aliquid neque odit aliquam veritatis. Quasi dolor sed ex dignissimos ipsa.</p>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
    }
}
export default Header;