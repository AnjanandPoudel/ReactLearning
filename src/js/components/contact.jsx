import React,{Component} from 'react'
import { Breadcrumb,BreadcrumbItem,Form,Input,Col,FormGroup,Label,Button,FormFeedback } from 'reactstrap';
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






class Contact extends Component {
    constructor(){
        super()
        this.state={
            firstname:'',
            lastname:'',
            telnum:'',
            email:'',
            rememberme:false,
            message:'',
            contacttype:'',
            touched:{
                firstname:false,
                lastname:false,
                telnum:false,
                email:false
            }
        }
        this.handleSubmit=this.handleSubmit.bind(this)
        this.handleInputChange=this.handleInputChange.bind(this)
        this.validate=this.validate.bind(this)
    }

    handleBlur=(field)=>(evt)=>{
        this.setState({
            touched:{...this.state.touched , [field]:true }
        })
    }

    validate(firstname,lastname,email,telnum){
        const errors={
            firstname:'',
            lastname:'',
            telnum:'',
            email:''
        }
        const reg=/^\d+$/;
        errors.firstname= this.state.touched.firstname && firstname.length <=2 ? 'Not valid' : '';
        errors.lastname= this.state.touched.lastname && lastname.length <=2 ? 'Not valid' : '';
        errors.telnum= this.state.touched.telnum && !reg.test(telnum) ? "Characters not allowed" : '';
        errors.email= this.state.touched.email && email.split('').filter(x=>x==='@').length !==1 ? 'Not valid, @ required':''
        return(errors)
    }

    handleInputChange(event){
        const target=event.target
        const value=target.type==="checkbox" ? target.checkbox : target.value
        const name=target.name
        this.setState({
            [name]:value
        })
        
    }

    handleSubmit(event){
        alert('Show it'+JSON.stringify(this.state))
        event.preventDefault()
    }

    render(){
        const validate=this.validate(this.state.firstname,this.state.lastname,this.state.email,this.state.telnum)
        console.log(validate)
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
                    
                    <Form onSubmit={this.handleSubmit} className="col-12 col-md-9">
                        <FormGroup row>
                            <Label htmlFor="firstname" md={2} > FirstName </Label>
                            <Col md={10}>
                                <Input type="text" placeholder="firstname" id="firstname" name="firstname"
                                    value={this.state.firstname}
                                    onBlur={this.handleBlur('firstname')}
                                    onChange={this.handleInputChange}
                                    valid={validate.firstname.length>=1}
                                    invalid={validate.firstname!==''}
                                    />
                                    <FormFeedback>{validate.firstname}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="lastname" md={2} > LastName</Label>
                            <Col md={10}>
                                <Input type="text" placeholder="lastname" id="lastname" name="lastname"
                                    value={this.state.lastname}
                                    valid={validate.lastname.length>=1}
                                    onBlur={this.handleBlur('lastname')}
                                    invalid={validate.lastname!==''}
                                    onChange={this.handleInputChange}
                                    />
                                    <FormFeedback>{validate.lastname}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="telnum" md={2} > Phone /  tel no.</Label>
                            <Col md={10}>
                                <Input type="tel" placeholder="telnum" id="telnum" name="telnum"
                                    value={this.state.telnum}                                    onChange={this.handleInputChange}
                                    onBlur={this.handleBlur('telnum')}
                                    valid={validate.telnum.length>=1}
                                    invalid={validate.telnum!==''}

                                    />
                                    <FormFeedback>{validate.telnum}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="email" md={2} > Email </Label>
                            <Col md={10}>
                                <Input type="email" placeholder="example@example.com" id="email" name="email"
                                    value={this.state.email}                                    onChange={this.handleInputChange}
                                    valid={validate.email.length>=1}
                                    invalid={validate.email!==''}                                    onBlur={this.handleBlur('email')}

                                    />
                                    <FormFeedback>{validate.email}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                           <Col md={{size:5 ,offset:2}}>
                            <FormGroup check>
                                <Label check >
                                        <Input type="checkbox" 
                                            name="rememberme" 
                                            checked={this.state.rememberme} 
                                            onChange={this.handleInputChange}
                                            valid={validate.firstname.length>=1}
                                            invalid={validate.firstname!==''} 
                                        />
                                         {' '} <strong> Remember Me </strong>
                                </Label>
                            </FormGroup>
                           </Col>
                           <Col md={{size:3 ,offset:2}}>
                                <Input type="select" name="contacttype" checked={this.state.contacttype} onChange={this.handleInputChange}  >
                                <option>Tel</option>
                                <option>phone</option>

                                </Input>
                           </Col>
                        </FormGroup>
                        <FormGroup  row>
                            <Label md={2} htmlFor="feedback"> Your Feedback</Label>
                            <Col md={10}>
                                <Input type="textarea" placeholder="Your feedback" value={this.state.message} rows={12} name='message' id="message"
                                onChange={this.handleInputChange}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup  row>
                            <Col md={{size:10,offset:2}}>
                                <Button type="submit" color="primary" >Send Feedback</Button>
                            </Col>
                        </FormGroup>
                    </Form>

                </div>
            </div>
        );
    }
}

export default Contact;