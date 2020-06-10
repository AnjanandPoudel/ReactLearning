import React,{Component} from 'react'
import Main from './components/MainComponent';
import {BrowserRouter as Router } from 'react-router-dom'




class App extends Component{


    render(){
    return(
        <Router>
            <div className="">
                <Main />
            </div>
        </Router>
    )
    }
}
export default App;