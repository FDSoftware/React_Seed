import { fakeHttpModule } from "common/http";
import { uploadImage } from "../../Images/services";

export function uuidv4() {
	return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
		var r = (Math.random() * 16) | 0,
			v = c === "x" ? r : (r & 0x3) | 0x8;
		return v.toString(16);
	});
}

export const getMeals = ({ token }) => fakeHttpModule.get("api/Meals", token);

const mealHelper = async ({ token, payload, isPost }) => {
	const id = uuidv4();
	payload.Meal.ID = id;

	if (payload.Image) {
		const image_result = await uploadImage({
			token,
			payload: { image: payload.Image, uuid: id },
		});
		if (image_result.data) {
			// console.log(image_result);
			payload.Meal.MealURL = image_result.data.data.url;
			// console.log(payload.Meal);
			return isPost
				? fakeHttpModule.post("api/Meals", token, JSON.stringify(payload.Meal), true)
				: fakeHttpModule.put("api/Meals", token, JSON.stringify(payload.Meal), true);
		}
		return image_result;
	}
	return isPost
		? fakeHttpModule.post("api/Meals", token, JSON.stringify(payload.Meal), true)
		: fakeHttpModule.put("api/Meals", token, JSON.stringify(payload.Meal), true);
};

export const addMeal = async ({ token, payload }) =>
	mealHelper({ token, payload, isPost: true });

export const editMeal = async ({ token, payload }) =>
	mealHelper({ token, payload, isPost: false });
