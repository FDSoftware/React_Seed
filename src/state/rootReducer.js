import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

// Reducers
import Auth from "state/auth/reducer";
import SnackBar from "state/snackbar/reducer";
import Meals from "state/Meals/reducer";
import Images from "state/Images/reducer";

const createRootReducer = (history) =>
	combineReducers({
		Auth,
		SnackBar,
		Meals,
		Images,
		router: connectRouter(history),
	});

export default createRootReducer;
