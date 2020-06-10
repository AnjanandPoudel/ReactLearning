import React,{Component} from 'react'
import Menu from './MenuComponent';
import {DISHES} from '../shared/details';
import {PROMOTIONS} from '../shared/promotion';
import {COMMENTS} from '../shared/comment';
import {LEADERS} from '../shared/leader';
import Header from './header';
import Footer from './footer';
import Home from './HomeComponent';
import {Switch ,Route ,Redirect} from 'react-router-dom'
import Contact from './contact';
import DishdetailComponent from './DishdetailComponent'




class Main extends Component{

    constructor(){
        super()
        this.state={
            comment:COMMENTS,
            dishes:DISHES,
            leader:LEADERS,
            promotion:PROMOTIONS,
        }
    }

/*     handleChange=(dishid=>{
        this.setState(                </Route>

          {selectedDish:dishid}
        )
  
      })
   */

    render(){


        const HomePage =() =>{
            return(
                <Home dish={this.state.dishes.filter((item)=>item.featured)} 
                 promo={this.state.promotion.filter((item)=>item.featured)}
                 leader={this.state.leader.filter((item)=>item.featured)}
                 comment={this.state.comment.filter((item)=>item.featured)} />
            )
        }

        const Dishdetail=()=>{
            return(
                <div className="">
                    <DishdetailComponent dish={this.state.dishes[0] }
                        comment={this.state.comment[0]}
                    />
                </div>
            )
        }


    return(
        <div className="">
            <Header />
            
            <Switch>
                <Route path="/home" component={HomePage} ></Route>
                <Route exact path="/menu" component={()=> <Menu dishes={this.state.dishes} /> }></Route>
                <Route path="/menu/:dishId" component={Dishdetail} ></Route>

                <Route exact path="/contact_us" component={Contact} ></Route>

                <Redirect to="/home" />
            </Switch>

            {/* <Menu dishes={this.state.dishes} onClick={(dishid) =>(this.handleChange(dishid))} />
            <DishdetailComponent key={this.state.selectedDish} dish={this.state.dishes.filter((dish)=>(dish.id===this.state.selectedDish))[0]} /> */}

            <Footer />

        </div>
    )
    }
}
export default Main;