import { combineReducers } from "redux";
import emailReducer from "./reducers/userReducer";

export default combineReducers({
    user: emailReducer 
});