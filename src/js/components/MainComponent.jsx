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
import {TransitionGroup,CSSTransition} from 'react-transition-group'

import { postComment ,postFeedback, fetchleaders,fetchDishes,fetchComments,fetchPromos } from '../redux/ActionCreators';



//changes states to props
// connects to ConfigureStore
const mapStateToProps=state=>{
    return{
        dishes:state.store_dishes,
        comment:state.store_comments,
        promotion:state.store_promotions,
        leader:state.store_leaders,
        feedInfo:state.store_feedback
        // used here as props: imported from redux as states
    }
}

const mapDispatchToProps=(my_dispatched)=>({
    cmt:(dishId,rating,author,comment)=>my_dispatched((postComment(dishId,rating,author,comment))),
    fetchDishes:()=>(my_dispatched(fetchDishes())),
    fetchComments:()=>(my_dispatched(fetchComments())),
    fetchPromos:()=>(my_dispatched(fetchPromos())),
    fetchleaders:()=>(my_dispatched(fetchleaders())),
    resetForm:()=> {my_dispatched(actions.reset('feedback'))},
    postFeedback:(fname,lname,ph,email,rememberme,contacttype,feedback)=>
        {my_dispatched(postFeedback(fname,lname,ph,email,rememberme,contacttype,feedback))}
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
        this.props.fetchleaders();
    }


    render(){

        console.log(this.props.feedInfo)
        console.log(this.props.comment)
        

        const HomePage =() =>{
            return(
                <Home dish={this.props.dishes.finaldish.filter((item)=>item.featured)} 
                 promo={this.props.promotion.promos.filter((item)=>item.featured)}
                 leader={this.props.leader.leaders.filter((item)=>item.featured)}
                 comment={this.props.comment.comments.filter((item)=>item.featured)}
                 dishload={this.props.dishes.isLoading}
                 disherror={this.props.dishes.errMsg}
                 promoload={this.props.promotion.isLoading}
                 promoerror={this.props.promotion.errMsg}
                 />
            )
        }

        const About_us=()=>{
            return(
                <About leaders={this.props.leader.leaders}
                    leaderError={this.props.leader.leaderError}    
                    leaderLoading={this.props.leader.leaderLoading}
                    />
            )
        }

        const Dishdetail=({match})=>{
            console.log(this.props.dishes)

            return(
                <div className="">
                    <DishdetailComponent dish={this.props.dishes.finaldish.filter((item)=> item.id === parseInt(match.params.dishId,10))[0] }
                    comment={this.props.comment.comments.filter((item)=>item.dishId===parseInt(match.params.dishId,10))}
                    postComment={this.props.cmt}
                    dishload={this.props.dishes.isLoading}
                    disherror={this.props.dishes.errMsg}
                    commenterror={this.props.comment.errMsg}
                    
                    />
                </div>
            )
        }

        const Contactfile=()=>{
            return(
                <Contact resetForm={this.props.resetForm}
                 postFeedback={this.props.postFeedback}
                 feedInfo={this.props.feedInfo}

                 />
            )
        }


    return(
        <div className="">
            <Header />
            <TransitionGroup>
                <CSSTransition key={this.props.location.key} classNames="page" timeout={300} >
                    
                    <Switch location={this.props.location}>
                        <Route path="/home" component={HomePage} ></Route>
                        <Route exact path="/menu" component={()=> <Menu dishes={this.props.dishes} /> }></Route>
                        <Route path="/menu/:dishId" component={Dishdetail} ></Route>

                        <Route exact path="/contact_us" component={Contactfile} ></Route>
                        <Route exact path="/about_us" component={About_us}/>
                        <Redirect to="/home" />
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
            

            {/* <Menu dishes={this.props.dishes} onClick={(dishid) =>(this.handleChange(dishid))} />
            <DishdetailComponent key={this.props.selectedDish} dish={this.props.dishes.filter((dish)=>(dish.id===this.props.selectedDish))[0]} /> */}

            <Footer />

        </div>
    )
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main)); //connest takes mapStatetoprops and mapDispatchtoprops as a parameter and withRouter is used because React router is used here.


