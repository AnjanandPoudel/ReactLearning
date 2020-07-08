import React,{Component} from 'react'
import { Breadcrumb,BreadcrumbItem,Col,Label,Button,Row } from 'reactstrap';
import {Link  } from 'react-router-dom';
import {Form , Control, Errors} from 'react-redux-form';



const required = (val) => val && (val.length);
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength=len=>(val)=> (val )&& (val.length >= len);
const isNumber=(val)=>!isNaN(Number(val));
const validEmail=(val)=>/^[A-Z0-9._%+=]+@[A-Z0-9.-]+\.[A-Z]{2,5}$/i.test(val)


/* 
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
 */



class Contact extends Component {
    constructor(){
        super()
        this.handleSubmit=this.handleSubmit.bind(this) 
    }

    handleSubmit(values){
        this.props.postFeedback(values.firstname,values.lastname,values.telnum,values.email,values.rememberme,values.contacttype,values.message)
        this.props.resetForm();
    }

    render(){
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
                <div className="row row-content">
                    <h4 className="col-12 col-md-9">Do you want to send feeback or talk about some problems ?</h4>
                    
                    <Form model="feedback" onSubmit={(values)=> this.handleSubmit(values) } className="col-12 col-md-9">
                        <Row className="form-group" >
                            <Label htmlFor="firstname" md={2} > FirstName </Label>
                            <Col md={10}>
                                <Control.text model=".firstname" className="form-control"  placeholder="firstname"   
                                    id="firstname" name="firstname"
                                    validators={{
                                        required,minLength:minLength(3),maxLength:maxLength(30)
                                    }}
                                    />
                                    <Errors className="text-danger" model=".firstname" show="touched"
                                    messages={{
                                        required:"Required ",
                                        minLength:"Must be greater than 2 charcters",
                                        maxLength:"Must be smaller than 30 charcters",
                                    }}  />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="lastname" md={2} > LastName</Label>
                            <Col md={10}>
                                <Control.text model=".lastname" className="form-control" placeholder="lastname" id="lastname" name="lastname"
                                maxLength="20"
                                minLength="3"
                                  
                                validators={{
                                    required,minLength:minLength(3),maxLength:maxLength(30)
                                }}
                                />
                                <Errors className="text-danger" model=".lastname" show="touched"
                                messages={{
                                    required:"Required ",
                                    minLength:"Must be greater than 2 charcters",
                                    maxLength:"Must be smaller than 30 charcters",
                                }} />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="telnum" md={2} > Phone /  tel no.</Label>
                            <Col md={10}>
                                <Control.text model=".telnum" className="form-control" type="tel" placeholder="phone number" id="telnum" name="telnum"
                                 validators={{
                                    required,minLength:minLength(6),maxLength:maxLength(20),isNumber
                                }}
                                />
                                <Errors className="text-danger" model=".telnum" show="touched"
                                messages={{
                                    required:"Required ",
                                    minLength:"Must be greater than 6 charcters",
                                    maxLength:"Must be smaller than 20 charcters",
                                    isNumber:" Must be only numbers  "
                                }} />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="email" md={2} >Email </Label>
                            <Col md={10}>
                                <Control.text model=".email" className="form-control" type="email"             
                                    placeholder="example@example.com" id="email" name="email"
                                    validators={{
                                        required,validEmail
                                    }}
                                    />
                                    <Errors className="text-danger" model=".email" show="touched"
                                    messages={{
                                        required:"Required ",
                                        validEmail:" Invalid email address "
                                    }} />
                            </Col>
                        </Row>
                        <Row className="form-group">
                           <Col md={{size:5 ,offset:2}}>
                            <div  className="form-check">
                                <Label check >
                                        <Control.checkbox model=".rememberme" type="checkbox" 
                                            name="rememberme" className="form-check-input"
                                            />
                                         {' '} <strong> Remember Me </strong>
                                </Label>
                            </div>
                           </Col>
                           <Col md={{size:3 ,offset:2}}>
                                <Control.select className="form-control" model=".contacttype" name="contacttype"  >
                                <option>Tel</option>
                                <option>phone</option>

                                </Control.select>
                           </Col>
                        </Row>
                        <Row className="form-group">
                            <Label md={2} htmlFor="feedback"> Your Feedback</Label>
                            <Col md={10}>
                                <Control.textarea model=".message" placeholder="Your feedback" rows={12} name='message' id="message" className="form-control"
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col md={{size:10,offset:2}}>
                                <Button type="submit" color="primary" >Send Feedback</Button>
                            </Col>
                        </Row>
                    </Form>

                </div>
            </div>
        );
    }
}

export default Contact;