import React, {  } from 'react';
import { Card,CardImg,CardImgOverlay,CardTitle,Breadcrumb,BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';
import Loading from "./loading";
import { baseUrl } from "../shared/baseUrl";


function RenderMenu({dish}){
    return(
      <Link to={`menu/${dish.id}`} >
        <Card>
          <CardImg width="100%" src={baseUrl+dish.image} alt={dish.name} />
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
              <div className="row col-12 col-md-5 m-5">
                  <h3>Some error has occured</h3>
                  <h4>{props.dishes.errMsg}</h4>
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