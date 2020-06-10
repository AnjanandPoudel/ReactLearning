import React from 'react';
import {Card,CardBody,CardTitle,CardText,CardImg, CardSubtitle} from 'reactstrap'




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
        <div className="container">
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
    )
}

export default Home;