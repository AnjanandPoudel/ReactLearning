import React,{Component} from 'react';
import Menu from './MenuComponent';
import Header from './header';
import Footer from './footer';
import Home from './HomeComponent';
import About from './AboutComponent';
import Contact from './contact';
import DishdetailComponent from './DishdetailComponent';

import {Switch ,Route ,Redirect,withRouter} from 'react-router-dom';
import { connect } from "react-redux";
import {actions} from "react-redux-form";

import { addComment ,fetchDishes,fetchComments,fetchPromos } from '../redux/action';



//changes states to props
// connects to ConfigureStore
const mapStateToProps=state=>{
    return{
        dishes:state.store_dishes,
        comment:state.store_comments,
        promotion:state.store_promotions,
        leader:state.store_leaders
        // used here as props: imported from redux as states
    }
}

const mapDispatchToProps=(my_dispatched)=>({
    cmt:(dishId,rating,author,comment)=>my_dispatched((addComment(dishId,rating,author,comment))),
    fetchDishes:()=>(my_dispatched(fetchDishes())),
    fetchComments:()=>(my_dispatched(fetchComments())),
    fetchPromos:()=>(my_dispatched(fetchPromos())),
    resetForm:()=> {my_dispatched(actions.reset('feedback'))}
}
)



class Main extends Component{


/*     handleChange=(dishid=>{
        this.setState(                </Route>

          {selectedDish:dishid}
        )
  
      })
   */


    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchPromos();
        this.props.fetchComments();
    }


    render(){

        const HomePage =() =>{
            console.log(this.props.dishes)
            return(
                <Home dish={this.props.dishes.finaldish.filter((item)=>item.featured)} 
                 promo={this.props.promotion.promos.filter((item)=>item.featured)}
                 leader={this.props.leader.filter((item)=>item.featured)}
                 comment={this.props.comment.comments.filter((item)=>item.featured)}
                 dishload={this.props.dishes.isLoading}
                 disherror={this.props.dishes.errMsg}
                 promoload={this.props.promotion.isLoading}
                 promoerror={this.props.promotion.errMsg}
                 />
            )
        }

        const Dishdetail=({match})=>{
            return(
                <div className="">
                    <DishdetailComponent dish={this.props.dishes.finaldish.filter((item)=> item.id === parseInt(match.params.dishId,10))[0] }
                    comment={this.props.comment.comments.filter((item)=>item.dishId===parseInt(match.params.dishId,10))}
                    addComment={this.props.cmt}
                    dishload={this.props.dishes.isLoading}
                    disherror={this.props.dishes.errMsg}
                    commenterror={this.props.comment.errMsg}
                    
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

                <Route exact path="/contact_us" component={()=><Contact resetForm={this.props.resetForm} />} ></Route>
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

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main)); //connest takes mapStatetoprops and mapDispatchtoprops as a parameter and withRouter is used because React router is used here.


