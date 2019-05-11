import React, {Component} from 'react';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';

class Sidebar extends Component{
    constructor(props){
        super(props);
    }

    render(){
        console.log('user_id from props:',this.props);
        return(
            <div class="sidebar-nav main-navigation">
                <ul class="nav menu-font">
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            {/* <i class="nav-icon cui-speedometer"></i><img class="myimg" src={require('../src/logoSAC.png')}/> */}
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="http://localhost:3000/iot/5cc215d1aee5bb970afcea84/farmers/">
                            <i class="nav-icon cui-speedometer"></i>List Of Farmers
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="http://localhost:3000/iot/5cc215d1aee5bb970afcea84/farmers/1/nodes">
                            <i class="nav-icon cui-speedometer"></i>List All Nodes For A Farmer
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="add_a_sensor.html">
                            <i class="nav-icon cui-speedometer"></i>Add A Sensor
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            <i class="nav-icon cui-speedometer"></i>Delete A Sensor
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="http://localhost:3000/users/1/nodes/1/sensors">
                            <i class="nav-icon cui-speedometer"></i>List All Sensors For A Node For A Farmer
                        </a>
                    </li>
                    {/*Wenyan Routes */}
                    {/* <li class="nav-item">
                        <a class="nav-link" href="http://localhost:3000/nodes">
                            <i class="nav-icon cui-speedometer"></i>List All Nodes 
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="http://localhost:3000/nodes/1">
                            <i class="nav-icon cui-speedometer"></i>List A Specific Node 
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="http://localhost:3000/sensors/1">
                            <i class="nav-icon cui-speedometer"></i>List A Specific Sensor
                        </a>
                    </li> */}
                </ul>
            </div>
        )
    }
}

export default Sidebar;