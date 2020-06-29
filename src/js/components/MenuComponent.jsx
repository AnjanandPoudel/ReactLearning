import React, {  } from 'react';
import { Card,CardImg,CardImgOverlay,CardTitle,Breadcrumb,BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';
import Loading from "./loading";


function RenderMenu({dish}){
    return(
      <Link to={`menu/${dish.id}`} >
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardImgOverlay>
            <CardTitle >{dish.name}</CardTitle>
          </CardImgOverlay>
        </Card>
      </Link>
    )
}

function Menu(props){
  const menu = props.dishes.finaldish.map((dish) => {
    return (
      <div key={dish.id} className="offset-1 col-10 col-sm-6 col-md-3 align-center dishes">
        <RenderMenu dish={dish} />
      </div>
    );
  });

  if(props.dishes.isLoading){
    return(
        <div className=""><Loading /></div>
    )
  }
  else if(props.dishes.errMsg){
      return(
          <div className="container">
              <div className="row">
                  <h3>Some error has occured</h3>
                  <p>{props.dishes.errMsg}</p>
              </div>
          </div>
      )
  }

  else{
      return (
        <div className="container">
          <div className="row">
            <Breadcrumb>
              <BreadcrumbItem> <Link to='/home'>Home</Link>  </BreadcrumbItem>
              <BreadcrumbItem active> Menu </BreadcrumbItem>
            </Breadcrumb>
          </div>
          <div className="row">
            {menu}
          </div>           
        </div>
      );

    }
  }

export default Menu;