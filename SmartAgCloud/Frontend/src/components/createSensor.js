import React, {Component} from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
import {fetchEachFarmer} from '../actions';
import {createSensor} from '../actions';
import {connect} from 'react-redux';

class CreateSensor extends Component{
    constructor(props){
        super(props);
        this.state={
            search: "",
            sensor_name: "",
            sensor_desc: "",
            sensor_type: ""

        }
    }

    componentDidMount(){
        console.log('ID in Dashboard:',this.props.match.params.id);
        console.log('Courses in state:',this.state.courses);
        console.log('&&&&Courses in Store in Dashboard:',this.props.courses);
        this.props.fetchEachFarmer(this.props.match.params.id)
    }

    onSearchTextChange = (e) => {
        this.setState({search:e.target.value})
    }

    onSensorNameChange = (e) => {
        this.setState({sensor_name:e.target.value})
    }

    onSensorTypeChange = (e) => {
        console.log("onSensorTypeChange:->",e.target.value);
        this.setState({sensor_type:e.target.value})
    }

    onSensorDescChange = (e) => {
        this.setState({sensor_desc : e.target.value})
    }

    onSubmitHandler = (e) => {
        e.preventDefault();
        console.log('userId in params:',this.props.match.params.userId);
        let farmerId = this.props.match.params.farmerId;
        let data = {
            farmerId: this.props.match.params.farmerId,
            sensor_name: this.state.sensor_name,
            sensor_desc: this.state.sensor_desc,
            sensor_type: this.state.sensor_type
        }
        console.log('Data being sent to backend on CreateSensor action:->',data);
        this.props.createSensor(data,()=>{
            this.props.history.push(`/users/${this.props.match.params.userId}/sensors`);
        });
    }

    render(){
        return(
            <div>
                <div class="container">
                <div class="sidebar-nav main-navigation">
                    <ul class="nav menu-font">
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <i class="nav-icon cui-speedometer"></i><img class="myimg" src="logoSAC.png"/>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="IOTDashboard.html">
                                <i class="nav-icon cui-speedometer"></i>List Of Farmers
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <i class="nav-icon cui-speedometer"></i>Add A Sensor
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="delete_a_sensor.html">
                                <i class="nav-icon cui-speedometer"></i>Delete A Sensor
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <i class="nav-icon cui-speedometer"></i>View Sensor Data
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <i class="nav-icon cui-speedometer"></i>Library
                            </a>
                        </li>
                    </ul>
                </div>
                <br/><br/>
                <div class="row">
                    <div class="col-md-1">
                    </div>
                    <div class="col-md-11">
                        <form method="post">
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Sensor Name</label>
                                    <input type="text" name="sensor_name" onChange={this.onSensorNameChange} class="form-control" id="exampleFormControlInput1" placeholder="Name your sensor"/>
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlSelect1">Sensor Type</label>
                                    <select class="form-control" defaultValue="Humidity" onChange={this.onSensorTypeChange} id="exampleFormControlSelect1">
                                        <option>Humidity</option>
                                        <option>Moisture</option>
                                        <option>Soil Nutrition</option>
                                        <option>Temperature</option>
                                    </select>
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">Description</label>
                                <textarea name="sensor_desc" onChange={this.onSensorDescChange} class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Describe your sensor"></textarea>
                            </div>
                            <input type="submit" onClick={this.onSubmitHandler} class="btn btn-md btn-success" value="Add Sensor"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )

}
}

const mapStateToProps = (state) => ({
    eachFarmer:state.eachFarmer,
});

export default connect(mapStateToProps, {createSensor, fetchEachFarmer})(CreateSensor);