import React,{Component} from 'react'
import Menu from './MenuComponent';
import {DISHES} from '../shared/menudata';
import { Navbar ,NavbarBrand} from 'reactstrap';
import DishdetailComponent from './DishdetailComponent';



class Main extends Component{

    constructor(){
        super()
        this.state={
            dishes:DISHES,
            selectedDish:null
        }
    }

    handleChange=(dishid=>{
        this.setState(
          {selectedDish:dishid}
        )
  
      })
  

    render(){
    return(
        <div className="">
            <Navbar color="primary"> 
                <div className="container">
                    <NavbarBrand href="/">
                        <h4>Anjan</h4>
                    </NavbarBrand>
                </div>
            </Navbar>

            <Menu dishes={this.state.dishes} onClick={(dishid) =>(this.handleChange(dishid))} />
            <DishdetailComponent key={this.state.selectedDish} dish={this.state.dishes.filter((dish)=>(dish.id===this.state.selectedDish))[0]} />

        </div>
    )
    }
}
export default Main;