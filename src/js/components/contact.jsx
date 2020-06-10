import React from 'react'
import { Breadcrumb,BreadcrumbItem } from 'reactstrap';
import {Link  } from 'react-router-dom';


/* 

function Contact(){
    return(

            <div className="container">
                <div className="col-12">
                    <h3>Some of our Contacts are listed here.</h3>
                </div>

                <div className="col-12 col-sm-4 offset-1 p-1">
                    <h3>Address</h3>
                    <address>
                        121, Clear Water Bay Road <br/>
                        Clear Water Bay, Kowloon  <br/>
                        HONG KONG
                    </address>
                </div>

            </div>
       
    )
    
}
export default Contact; */






function Contact(props) {
    return(
        <div className="container">
            <div className="row">
              <Breadcrumb>
                <BreadcrumbItem> <Link to='/home'>Home</Link>  </BreadcrumbItem>
                <BreadcrumbItem active> Contact us </BreadcrumbItem>
              </Breadcrumb>
            </div>
            <div className="row row-content">
                <div className="col-12">
                <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                        121, Clear Water Bay Road<br />
                        Clear Water Bay, Kowloon<br />
                        HONG KONG<br />
                        <i className="fa fa-phone"></i>: +977 98058-0920 <br/>
                        <i className="fa fa-fax"></i>: +852 8765 4321<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:9805800920"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" href="https://www.skype.com/en/" className="btn btn-info"><i className="fab fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:cruserap@gmail.com"><i className="fa fa-envelope"></i> Email</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;