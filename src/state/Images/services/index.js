import { fakeHttpModule, httpModule } from "common/http";

export const getMeals = ({ token }) => fakeHttpModule.get("api/FoodMock", token);

export function uuidv4() {
	return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
		var r = (Math.random() * 16) | 0,
			v = c === "x" ? r : (r & 0x3) | 0x8;
		return v.toString(16);
	});
}

export const uploadImage = (url) => async ({ token, payload }) => {
	let data;
	const { image, uuid } = payload || {};
	if (payload) {
		const _data = new FormData();
		_data.append("ImageFile", image, image.name);
		_data.append("ProductId", uuid);
		_data.append("OrganizationId", "5f6efeba-1f26-11eb-adc1-0242ac120002");
		data = await httpModule.postFormData(url, _data, token);
		// console.log(data);
	}
	return data;
};
