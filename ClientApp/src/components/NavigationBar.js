import React from "react";
import './random.css'
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import jwt_decode from "jwt-decode";


class NavigationBar extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            refreshToken: false
        }
    }
    componentWillMount () {
        this.showLogout()
    }
    changestate = (event) => {
        const x = document.getElementsByClassName("menu-icon");
    }

    realchangestate = (e) => {
        const x = document.getElementsByClassName("menu-icon");
        x[0].checked = false;
    }
    showLogout = async () => {
        try {
            const response = await axios.get('http://developersheaven.nl:5000/token');
            if (response.data.accessToken != '') {
                this.setState({refreshToken: true});
                console.log(this.state.refreshToken);
            }
        } catch (error) {
            console.log(error);
            console.log("returned false");
            this.setState({refreshToken: false})
        }
    }
    Logout = (e) => {
        try {
            axios.delete('http://developersheaven.nl:5000/logout');
            window.location.replace("http://developersheaven.nl");
        } catch (error) {
            console.log(error);
        }
    }
    render () {
        return(
            <div>
                
                <input class="menu-icon" type="checkbox" onClick={(e) => this.changestate(e)} id="menu-icon" name="menu-icon"/>
                <label for="menu-icon"></label>
                <nav class="nav"> 		
                    <ul class="pt-5">
                        <li><NavLink onClick={() => this.realchangestate()} tag={Link} to="/">Home</NavLink></li>
                        <li><NavLink onClick={() => this.realchangestate()} tag={Link} to="/editor">Code Editor</NavLink></li>
                        {this.state.refreshToken === true &&
                        <li><NavLink onClick={() => this.realchangestate()} tag={Link} to="/dashboard">Dashboard</NavLink></li>}
                        <li><NavLink onClick={() => this.realchangestate()} tag={Link} to="/login">Inloggen</NavLink></li>
                        {this.state.refreshToken === true &&
                        <li><NavLink onClick={() => this.Logout()} tag={Link} to="/">Logout</NavLink></li>
                        }
                    </ul>
                </nav>

                
            </div>
        )
    }
}

export default NavigationBar;