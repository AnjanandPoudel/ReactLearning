import React,{Component} from 'react'

import { Navbar ,NavbarBrand,Jumbotron} from 'reactstrap';



class Header extends Component{

    render(){
    return(
        <React.Fragment>
            <div className="header">
                <Navbar className="navbar-dark"> 
                    <div className="container">
                        <NavbarBrand href="/" color="white">
                            <h4 >Anjan</h4>
                        </NavbarBrand>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-md-6">
                                <h1>Anjan Poudel</h1>
                                <p>This is  a paragraph. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, tenetur modi in consequuntur, doloremque sapiente illum quis maiores sequi aliquid neque odit aliquam veritatis. Quasi dolor sed ex dignissimos ipsa.</p>

                            </div>
                        </div>
                    </div>
                </Jumbotron>

            </div>
        </React.Fragment>
    )
    }
}
export default Header;