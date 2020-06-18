import React,{Component} from 'react'
import { Breadcrumb,BreadcrumbItem,Form,Input,Col,FormGroup,Label,Button } from 'reactstrap';
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
            contacttype:''
        }
        this.handleSubmit=this.handleSubmit.bind(this)
        this.handleInputChange=this.handleInputChange.bind(this)
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
                                    onChange={this.handleInputChange}

                                    />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="lastname" md={2} > LastName</Label>
                            <Col md={10}>
                                <Input type="text" placeholder="lastname" id="lastname" name="lastname"
                                    value={this.state.lastname}
                                    onChange={this.handleInputChange}
                                    />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="telnum" md={2} > Phone /  tel no.</Label>
                            <Col md={10}>
                                <Input type="tel" placeholder="telnum" id="telnum" name="telnum"
                                    value={this.state.telnum}                                    onChange={this.handleInputChange}

                                    />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="email" md={2} > Email </Label>
                            <Col md={10}>
                                <Input type="email" placeholder="example@example.com" id="email" name="email"
                                    value={this.state.email}                                    onChange={this.handleInputChange}

                                    />
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