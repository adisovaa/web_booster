import './App.css';
import {Route} from "react-router-dom";
import Description from "./components/Description/Description";
import CartItem from "./components/CartItem/CartItem";
import {Component} from "react";
import Navbar from "./components/Navbar/Navbar";

class App extends Component {

    render() {
        return (
            <div className="app-wrapper">
                <Navbar/>
                <Route path='/cartItem' render={() => <CartItem />}/>
                <Route path='/description' render={() => <Description/>}/>
            </div>
        );
    }
}

export default App;
