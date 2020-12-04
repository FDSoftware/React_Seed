import httpModule, { fakeHttpModule } from "common/http";
import { uploadImage } from "../../Images/services";

export function uuidv4() {
	return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
		var r = (Math.random() * 16) | 0,
			v = c === "x" ? r : (r & 0x3) | 0x8;
		return v.toString(16);
	});
}

const formatDate = (date) => {
	const [month, day, year] = date.toLocaleDateString("en-US").split("/");
	return `${year}-${month}-${day}`;
};

export const getPlanner = ({ token, payload }) => {
	// Example URL:
	// http://dev.foodreadygo.com/api/calendar/v1/mealplanner/from/2017-07-21/to/2030-07-21/page/0/quantity/15

	const [from, to] = payload.dates ?? [new Date("2018/07/12"), new Date("2020/07/12")];
	const page = payload.page ?? 0;
	const pageSize = payload.pageSize ?? 10;

	const requestURL = `from/${formatDate(from)}/to/${formatDate(
		to,
	)}/index/${page}/quantity/${pageSize}`;

	return httpModule.get("calendar/v1/mealplanner/" + requestURL, token);
};

export const getPlannDetail = ({ token, payload }) => {

}

export const getPlannerCollision = ({ token, payload }) =>{
	const [from, to] = payload.dates ?? [new Date("2018/07/12"), new Date("2020/07/12")];
	const requestURL = `product​/${payload?.productID}​/from​/${formatDate(from)}​/to​/${formatDate(to)}`;

	return httpModule.get("calendar/v1/mealplanner/checkmealplanforpotentialcollision/" + requestURL, token);
}

const mealHelper = async ({ token, payload, isPost }) => {
	/*  */
};

export const deleteMealPlan = ({ token, payload }) => {
	return httpModule.delete(`calendar/v1/mealplanner/${payload}`, undefined, token, false);
};

export const addMeal = async ({ token, payload }) =>
	mealHelper({ token, payload, isPost: true });

export const editMeal = async ({ token, payload }) =>
	mealHelper({ token, payload, isPost: false });
