import React  from 'react';
import { Card,CardBody,CardImg,CardTitle, CardText} from 'reactstrap';
import {Breadcrumb,BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom'


function RenderImage(dish){
    if (dish!==undefined && dish!==null){
            return(
                <Card >
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name} </CardTitle>
                        <CardText>{dish.description} </CardText>
                        
                    </CardBody>
                </Card>
                
            )
    }
}


function RenderComment(comments){
    console.log(comments)
    let item


    if (comments!==undefined && comments!==null){
        item=comments.map(item=>{
        return(
                <CardBody key={item.id}>
                    <CardText>{item.comment} </CardText>
                    <CardText>  -- {item.author} , {new Intl.DateTimeFormat('en-US' ,{year:'numeric',month:"short",day:"2-digit",hour:"numeric"}).format(new Date(Date.parse(item.date)))} </CardText>
                </CardBody>
        )
        })
    }
    return(
        <div>
            <h2>Comments:</h2>
            {item}
        </div>
    )

}



function DishdetailComponent(props){
    if(props!==null){
        
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
                    {RenderImage(props.dish)}
                </div>
                <div className="col-12 col-md-5 m-1 ">
                    {RenderComment(props.comment)}
                </div>
            </div>
        </div>
        )
        
    }
    
}

export default DishdetailComponent;