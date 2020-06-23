import React,{Component} from 'react'
import Menu from './MenuComponent';

import Header from './header';
import Footer from './footer';
import Home from './HomeComponent';
import About from './AboutComponent';
import Contact from './contact';
import DishdetailComponent from './DishdetailComponent';

import {Switch ,Route ,Redirect,withRouter} from 'react-router-dom';
import { connect } from "react-redux";

//changes states to props
const mapStateToProps=state=>{
    return{
        dishes:state.dishes,
        comment:state.comments,
        promotion:state.promotions,
        leader:state.leaders
    }
}

class Main extends Component{


/*     handleChange=(dishid=>{
        this.setState(                </Route>

          {selectedDish:dishid}
        )
  
      })
   */

    render(){
        const HomePage =() =>{
            return(
                <Home dish={this.props.dishes.filter((item)=>item.featured)} 
                 promo={this.props.promotion.filter((item)=>item.featured)}
                 leader={this.props.leader.filter((item)=>item.featured)}
                 comment={this.props.comment.filter((item)=>item.featured)} />
            )
        }

        const Dishdetail=({match})=>{
            return(
                <div className="">
                    <DishdetailComponent dish={this.props.dishes.filter((item)=> item.id === parseInt(match.params.dishId,10))[0] }
                    comment={this.props.comment.filter((item)=>item.dishId===parseInt(match.params.dishId,10))}
                    />
                </div>
            )
        }


    return(
        <div className="">
            <Header />
            
            <Switch>
                <Route path="/home" component={HomePage} ></Route>
                <Route exact path="/menu" component={()=> <Menu dishes={this.props.dishes} /> }></Route>
                <Route path="/menu/:dishId" component={Dishdetail} ></Route>

                <Route exact path="/contact_us" component={Contact} ></Route>
                <Route exact path="/about_us" component={()=> <About leaders={this.props.leader} />} />
                <Redirect to="/home" />
            </Switch>

            {/* <Menu dishes={this.props.dishes} onClick={(dishid) =>(this.handleChange(dishid))} />
            <DishdetailComponent key={this.props.selectedDish} dish={this.props.dishes.filter((dish)=>(dish.id===this.props.selectedDish))[0]} /> */}

            <Footer />

        </div>
    )
    }
}

export default withRouter(connect(mapStateToProps)(Main)); //connest takes mapStatetoprops as a parameter and withRouter is used because React router is used here.


