import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import './Navigation.css';
import logo from '../BVM Logo1.jpeg';

class Navigation extends Component {


    render() {
        return (
            <div>
                <center>

<table>
    <tbody>
    <tr>
        <td>
            <img src={logo} width={200} height={200}/>
        </td>
        <td>
              Birla Vishvakarma Mahavidyalaya
            <br/>Engineering College

        </td>
    </tr>
    </tbody>
</table>
                </center>

                <NavLink to="/">
                    <button className={'button1'}>Home</button>
                </NavLink>
                <NavLink to="/about">
                    <button className={'button2'}>Candidates</button>
                </NavLink>
                <NavLink to="/history">
                    <button className={'button3'}>History</button>
                </NavLink>
                <NavLink to="/login">
                    <button className={'button1'}>Login</button>
                </NavLink>

            </div>
        )
    }
}
export default Navigation;