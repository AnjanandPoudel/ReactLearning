import React,{Component} from 'react'
import { Navbar ,NavbarBrand,Nav,NavbarToggler,Collapse,NavItem,Modal,ModalBody,ModalHeader, Button, Form, FormGroup, Input, Label } from 'reactstrap';
import {NavLink} from 'react-router-dom';




class Header extends Component{
    constructor(){
        super()
        this.state={
            isNavOpen:false,
            isModalOpen:false,

        }
/*         this.handleSubmit=this.handleSubmit.bind(this)
 */    }

    toggleNav=()=>{
        this.setState({
            isNavOpen:!this.state.isNavOpen
        })
    }

    toggleModal=()=>{
        this.setState({
            isModalOpen:!this.state.isModalOpen
        })
    }

    handleLogin=(event)=>{
        this.toggleModal()
        alert("Username = "+this.username.value+" password = "+this.password.value +' Remember me = '+this.rememberme.checked);
        event.preventDefault();
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
                            <Nav className="ml-auto">
                                <NavItem onClick={this.toggleModal}>
                                    <Button type="submit" > Login |
                                    <span className="fas fa-sign-in-alt"></span> </Button>
                                    
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
                                <p>This is  a paragraph. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, tent control the form that
                                it renders:
                                – Single source of truth
                                – Tying the form state to component statetur modi in consequuntur, doloremque sapiente illum quis maiores sequi aliquid neque odit aliquam veritatis. Quasi dolor sed ex dignissimos ipsa.</p>

                            </div>
                        </div>
                    </div>
                </div>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} >
                    <ModalHeader  toggle={this.toggleModal}>
                        Login Form;
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" placeholder="username" id="username" name="username" innerRef={(input)=>this.username=input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" placeholder="password" id="password" name="password" innerRef={(input)=>this.password=input} />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" id="checkbox" name="rememberme" innerRef={(input)=>this.rememberme = input} /> 
                                    Remember Me
                                </Label>
                                
                            </FormGroup>
                            <Button className="bg-success" type="submit" > Log in</Button>
                        </Form>
                    </ModalBody>
                </Modal>

            </div>
        </div>
    )
    }
}
export default Header;