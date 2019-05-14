import React from 'react';
import {Route, withRouter} from 'react-router-dom';
import Login from './Login';
import Farmers from './Farmers';
import FarmerNodes from './FarmerNodes';
import FarmerSensors from './FarmerSensors';
import Nodes from './Nodes';
import EachNode from './EachNode';
import EachSensor from './EachSensor';
import createSensor from './createSensor';

const Main = () => {
        return(
            <div>
                {/*Render a component based on the route*/}
                <Route exact path="/" component={withRouter(Login)}/>
                <Route exact path="/iot/:id/farmers" component={withRouter(Farmers)}/>
                <Route exact path="/iot/:id/farmers/:farmerId/nodes" component={withRouter(FarmerNodes)}/>
                <Route exact path="/nodes" component={withRouter(Nodes)}/>
                <Route exact path="/sensors/:sensorId" component={withRouter(EachSensor)}/>
                <Route exact path="/nodes/:nodeId" component={withRouter(EachNode)}/>
                <Route exact path="/iot/:userId/farmers/:farmerId/sensors" component={withRouter(createSensor)}/>
                <Route exact path="/users/:id/nodes/:nodeId/sensors" component={withRouter(FarmerSensors)}/>
                <Route exact path="/users/:id/sensors" component={withRouter(FarmerSensors)}/>
            </div>
        )
}

export default Main;


