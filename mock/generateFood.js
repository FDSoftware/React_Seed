//const token = "6785a1fccbfc4aea82a7e2454dd15b50";

const fs = require("fs");

const jsonData = JSON.parse(fs.readFileSync("./mockdata.json"));
const Status = ["Ordered", "checkedIn", "delivered", "closed"];

const randomDate = () => {
	const start = new Date(2020, 0, 1);
	const end = new Date(2030, 0, 1);
	return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

const getNumber = (min, max, round = true) =>
	round
		? Math.floor(Math.random() * (+max - +min)) + +min
		: (Math.random() * (+max - +min)).toFixed(2);

const getStatus = () => Status[getNumber(0, Status.length)];

const data = jsonData.recipes.map((e) => {
	const MealInfo = {
		vegan: e.vegan,
		vegetarian: e.vegetarian,
		glutenFree: e.glutenFree,
		dairyFree: e.dairyFree,
		veryHealthy: e.veryHealthy,
		sustainable: e.sustainable,
	};
	return {
		ID: e.id,
		MealName: e.title,
		MealURL: e.image,
		MealDate: randomDate(),
		Category: e.dishTypes[0],
		Status: getStatus(),
		healthScore: e.healthScore,
		price: e.pricePerServing,
		quantity: Math.round(Math.random() * 10),
		MealInfo: MealInfo,
	};
});

fs.writeFileSync("FoodMock.json", JSON.stringify(data));
