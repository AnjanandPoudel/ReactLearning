import React from 'react';
import {Card,CardBody,CardTitle,CardText,CardImg, CardSubtitle} from 'reactstrap';
import {Breadcrumb,BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom'




function RenderImage({item}){
    return(
       
            <div className="">
                <Card>
                    
                    <CardImg src={item.image}  />
                    <CardBody>
                        <CardTitle className="homecardtitle" > {item.name} </CardTitle>
                        { item.designation ? <CardSubtitle  className="homecardsubstitle" > {item.designation} </CardSubtitle>:null }
                        <CardText>{item.description} </CardText>
                    </CardBody>
                    
                </Card>
                
            </div>
       
    )
    
}

function Home(props){
    return(
       <div className="">
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
        <div className="container">
            <div className="row">
              <Breadcrumb>
                <BreadcrumbItem> <Link to='/home'>Home</Link>  </BreadcrumbItem>
              </Breadcrumb>
            </div>
            
            <div className="row">
                <div className="col-12 col-sm-4">
                    <RenderImage item={props.dish[0]} />
                </div>
                <div className="col-12 col-sm-4">
                    <RenderImage item={props.promo[0]} />
                </div>
                <div className="col-12 col-sm-4">
                    <RenderImage item={props.leader[0]} />
                </div>
            </div>
        </div>
       </div>
    )
}

export default Home;