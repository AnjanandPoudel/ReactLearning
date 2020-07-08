import React  from 'react';
import { Card,CardBody,CardImg,CardTitle, CardText, Modal, Button, ModalHeader, ModalBody, Label, Row, Col} from 'reactstrap';
import {Breadcrumb,BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom'
import { Component } from 'react';
import { LocalForm, Control, Errors } from 'react-redux-form';
import { FadeTransfrom ,Fade,Stagger } from "react-animation-components";

import { postComment } from '../redux/ActionCreators';
import Loading from "./loading";
import {baseUrl} from '../shared/baseUrl'


class CommentForm extends Component{

    constructor(){
        super()
        this.state={
            modal:false
        }
    }

    toggleModal=()=>{
        this.setState({
            modal:!this.state.modal
        })
    }

    handleSubmit=(values)=>{
        this.toggleModal();
        this.props.postComment(this.props.dishId,values.rating,values.name,values.comment)
        console.log(postComment(this.props.dishId,values.rating,values.name,values.comment))

    }

    render(){
        // when the case is FALSE then they appear. When case is truth, they disappear.
        const required=(val)=>(val) && (val.length)
        const minLength=(len)=>(val)=> (val) && (val.length)>=len
        const maxLength=(len)=>(val)=> !(val) || (val.length)<=len

        return(
            <div className="">
                <div className="container">
                    <Button color="outline-dark" onClick={this.toggleModal}>
                        <span className="fas fa-pen"></span>
                        Submit Comment
                    </Button>
                    
                </div>
                <Modal isOpen={this.state.modal} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>
                        <h4>Submit Comment</h4>
                    </ModalHeader>
                    <ModalBody>
                        
                        <LocalForm onSubmit={(values)=>this.handleSubmit(values)} className="col-12">
                            <Row className="form-group">
                                <Label htmlFor="rating" md={4}>Rating</Label>
                                <Col md={12}>
                                    <Control.select model=".rating" id="rating" name="rating" 
                                    className="form-control"  required>
                                        <option>please choose</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="name" md={4}>Your Name</Label>
                                <Col md={12}>
                                    <Control.text model=".name" id="name" name="name" placeholder="your name" 
                                    className="form-control"
                                    validators={{
                                        required,maxLength:maxLength(15),minLength:minLength(3)
                                    }}
                                    />
                                    <Errors className="text-danger" show="touched" model=".name" 
                                        messages={{
                                            required:" Required ",
                                            minLength:" Must be greater than 2 characters",
                                            maxLength:" Must be 15 characters or less "
                                        }}
                                    
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="comment" md={4}>Comment</Label>
                                <Col md={12}>
                                    <Control.textarea model=".comment" id="comment" name="comment" 
                                    className="form-control" rows={8}  />
                                </Col>
                            </Row>
                            <Button color="primary">Submit</Button>
                        </LocalForm>

                    </ModalBody>
                </Modal>
            </div>
        )
    }
    

}


function RenderImage(dish,dishload,disherror){
    console.log(disherror)

    if(dishload){
        return(
            <div className=""><Loading /></div>
        )
    }
    else if(disherror){
        return(
            <div className="container">
                <div className="row col-12 col-md-5 m-5">
                  <h3>Some error has occured</h3>
                  <h4>{disherror}</h4>
              </div>
            </div>
        )
    }

    else if (dish!==undefined && dish!==null){
        return(
            <Card >
                <CardImg width="100%" src={baseUrl+dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name} </CardTitle>
                    <CardText>{dish.description} </CardText>
                    
                </CardBody>
            </Card>
            
        )
    }
    else{
        return(
            <div className=""></div>
        )
    }
}


function RenderComment({comments,dish,postComment,commenterror}){
    console.log(comments)
    console.log(dish)
    let item;

    if(commenterror){
        return(
            <div className="container">
                <div className="row col-12 col-md-5 m-5">
                  <h3>Some error has occured</h3>
                  <h4>{commenterror}</h4>
              </div>
            </div>
        )
    }
    
    else if (comments!==undefined && comments!==null){
        item= comments.map(item=>{
            
            
        return(
            
            <Fade in>
                <CardBody key={item.id}>
                    <CardText>{item.comment} </CardText>
                    <CardText>  -- {item.author} , {new Intl.DateTimeFormat('en-US' ,{year:'numeric',month:"short",day:"2-digit",hour:"numeric"}).format(new Date(Date.parse(item.date)))} </CardText>
                </CardBody>
            </Fade>
        )
        })
    }

    if(dish!==undefined){
        return(
            <div>
                <h2>Comments:</h2>
                <Stagger in>
                    {item}
                </Stagger>
                <CommentForm dishId={dish.id} postComment={postComment}  />
            </div>
        )
    }
    else{
        return(
            <div className="">
                <h2>Comments:</h2>
                {item}
            </div>
        )
    }

    
}

function DishdetailComponent(props){
    console.log(props.disherror)
    console.log(props.dish)
  
    
    if(props.dish!==null && props.dish!==undefined){
        
        return(
        <div className="container">
            <div className="row">
              <Breadcrumb>
                <BreadcrumbItem> <Link to="/home"> Home</Link>  </BreadcrumbItem>
                <BreadcrumbItem> <Link to="/menu"> Menu</Link>  </BreadcrumbItem>
                <BreadcrumbItem> Dish  </BreadcrumbItem>
              </Breadcrumb>
            </div>
            <div className=" row">
                <div className="col-12 col-md-5 m-1">
                    <FadeTransfrom in transfromProps={{exitTransform:'scale(0.1) transformY(-50%)'}}>                    
                        {RenderImage(props.dish,props.dishload,props.disherror)}
                    </FadeTransfrom>
                </div>
                <div className="col-12 col-md-5 m-1 ">
                    <RenderComment comments={props.comment} dish={props.dish} postComment={props.postComment} commenterror={props.commenterror} />
                </div>
            </div>
        </div>
        )
        
    }
    else{
        return(
            <div className=""></div>
        )
    }
    
}

export default DishdetailComponent;