import {FETCH_USER} from '../actions';
import {FETCH_STUDENT} from '../actions';
import {FETCH_FACULTY} from '../actions';
import {FETCH_DASHBOARD} from '../actions';
import {FETCH_FARMERS} from '../actions';
import {FETCH_NODES} from '../actions';
import {FETCH_FARMER_NODES} from '../actions';
import {FETCH_EACH_FARMER} from '../actions';
import {FETCH_FARMER_SENSORS} from '../actions';
import {FETCH_EACH_NODE} from '../actions';
import {FETCH_EACH_SENSOR} from '../actions';
import {FETCH_EACH_COURSE} from '../actions';
import {FETCH_EACH_ASSG} from '../actions';
// import {REG_COURSE} from '../actions';
import {FETCH_PROFILE} from '../actions';
import {POST_PROFILE} from '../actions';
import {UPLOAD_ASSG} from  '../actions';
import {GRADE_ASSG} from '../actions';
//import {Redirect} from 'react-router-dom';

const initialState = {
    login:{
        username: "",
        password: "",
        authFlag: false,
        redirect: false,
        current_user_id:undefined,
        is_faculty:"",
        redirectVar:""
    },
    studentSignup:{
        name: "",
        email: "",
        password: ""
    },
    facultySignup:{
        name: "",
        email: "",
        password: ""
    },
    profile:{
        name: "",
        email: "",
        image: "",
        phone: "",
        bio: "",
        city: "",
        country: "",
        company: "",
        school: "",
        hometown: "",
        languages: "",
        gender:"",
        isHidden:true
    },
    courses:[],
    farmers: [],
    allFarmers: [],
    allNodes:[],
    farmer_nodes:[],
    eachFarmer: {},
    farmer_sensors: [],
    eachNode: {},
    eachSensor: {},
    allCourses: [],
    allAssgs: [],
    current_assg:{},
    current_assg_file:"",
    current_assg_grade:"",
    is_faculty:""
}

export function studentSignup(state=initialState, action){
    switch(action.type){
        case FETCH_USER:
            console.log('INSIDE REDUCER!!!',action.payload.data);
            return {
                ...state,
                login:{
                    current_user_id:action.payload.userid,
                    is_faculty:action.payload.is_faculty
                }
            }
        case FETCH_FARMERS:
            console.log('INSIDE FETCH_FARMERS REDUCER!!!',action.payload.allFarmers);
            return {
                ...state,
                allFarmers:action.payload.allFarmers
            };
            //return myObj;
        case FETCH_DASHBOARD:
            console.log('INSIDE FETCH_DASHBOARD REDUCER!!!',action.payload.course_data);
            return {
                ...state,
                courses:action.payload.course_data
            };
            //return myObj;
        case FETCH_NODES:
            console.log('INSIDE FETCH ALL NODES REDUCER!',action.payload.allNodes);
            return{
                ...state,
                allNodes: action.payload.allNodes,
                // courses:action.payload.courseData.course_data,
                // is_faculty:action.payload.courseData.is_faculty,
                // allCourses: action.payload.courseData.allCourses
            }
        case FETCH_FARMER_NODES:
            console.log('INSIDE FETCH FARMER NODES REDUCER!',action.payload.farmer_nodes);
            return{
                ...state,
                farmer_nodes: action.payload.farmer_nodes,
                // courses:action.payload.courseData.course_data,
                // is_faculty:action.payload.courseData.is_faculty,
                // allCourses: action.payload.courseData.allCourses
            }
        case FETCH_FARMER_SENSORS:
            console.log('INSIDE FETCH FARMER NODES REDUCER!',action.payload.farmer_nodes);
            return{
                ...state,
                farmer_sensors: action.payload.farmer_sensors,
            }
        case FETCH_EACH_NODE:
            console.log('INSIDE FETCH EACH NODE REDUCER!',action.payload.eachNode);
            return{
                ...state,
                eachNode: action.payload.eachNode
            }
        case FETCH_EACH_FARMER:
            console.log('INSIDE FETCH EACH FARMER REDUCER!',action.payload.eachFarmer);
            return{
                ...state,
                eachFarmer: action.payload.eachFarmer
            }
        case FETCH_EACH_SENSOR:
            console.log('INSIDE FETCH EACH SENSOR REDUCER!',action.payload.eachNode);
            return{
                ...state,
                eachSensor: action.payload.eachSensor
            }
        case FETCH_EACH_COURSE:
            console.log('INSIDE FETCH EACH COURSE REDUCER!',action.payload.assgData.assg_data);
            return{
                ...state,
                allAssgs:action.payload.assgData.assg_data,
                is_faculty:action.payload.assgData.is_faculty,
            }
        case FETCH_EACH_ASSG:
            console.log('INSIDE FETCH COURSE REDUCER!',action.payload.assgData.assg_data);
            return{
                ...state,
                current_assg:action.payload.assgData.current_assg,
                is_faculty:action.payload.assgData.is_faculty,
            }
        case FETCH_PROFILE:
            console.log('INSIDE REDUCER!!!',action.payload.data);
            return {
                ...state,
                profile:{
                    //{user_id:result[0].user_id,name:result[0].name,email:result[0].email,phone:result[0].phone,bio:result[0].about_me,city:result[0].city,company:result[0].company,country:result[0].country}
                    name:action.payload.name,
                    email:action.payload.email,
                    phone:action.payload.phone,
                    bio:action.payload.bio,
                    city:action.payload.city,
                    country:action.payload.country,
                    company:action.payload.company,
                    school:action.payload.school,
                    hometown:action.payload.hometown,
                    languages:action.payload.languages,
                }
            }
        case POST_PROFILE:
            console.log('INSIDE REDUCER!!!',action.payload.data);
            return {
                ...state,
                profile:{
                    name:action.payload.name,
                    email:action.payload.email,
                    phone:action.payload.phone,
                    hometown:action.payload.hometown,
                    bio:action.payload.bio,
                    city:action.payload.city,
                    country:action.payload.country,
                    company:action.payload.company
                }
            }    
        case FETCH_STUDENT:
            console.log('INSIDE REDUCER!!!',action.payload.data);
            return {
                ...state,
                login:{
                    id:action.payload.id,
                    is_faculty:action.payload.is_faculty
                }
            }
        case FETCH_FACULTY:
            console.log('INSIDE REDUCER!!!',action.payload.data);
            return {
                ...state
            }
        case GRADE_ASSG:
            console.log('INSIDE REDUCER!!!',action.payload.data);
            return {
                ...state,
                    current_assg_grade:action.payload.assg_grade
            }
        case UPLOAD_ASSG:
            console.log('INSIDE UPLOAD ASSG REDUCER!!!',action.payload);
            return {
                ...state,
                    current_assg_file:action.payload.file_path
            }
        default:
            return state;

    }
}