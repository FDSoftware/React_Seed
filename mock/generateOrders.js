const fs = require("fs");

const Food = JSON.parse(fs.readFileSync("./FoodMock.json"));
const Names = JSON.parse(fs.readFileSync("./Names.json"));
const Status = ["Ordered", "checkedIn", "delivered", "closed"];

console.log(Food.length);

let mockdata = [];

const getRandomID = () => `#${Math.round(Math.random() * 100)}`;

const randomDate = () => {
	const start = new Date(2020, 0, 1);
	const end = new Date(2030, 0, 1);
	return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

const getNumber = (min, max, round = true) =>
	round
		? Math.floor(Math.random() * (+max - +min)) + +min
		: (Math.random() * (+max - +min)).toFixed(2);

const getRandomMeals = () => {
	let data = [];
	for (let index = 0; index < getNumber(1, 5); index++) {
		data.push(Food[getNumber(0, Food.length - 1)]);
	}
	return data;
};

const getStatus = () => Status[getNumber(0, Status.length)];

for (let index = 0; index < 50; index++) {
	const FirstFood = Food[getNumber(0, Food.length - 1)];
	mockdata.push({
		OrderID: getRandomID(),
		OrderDate: randomDate(),
		CustomerName: Names[getNumber(0, Names.length - 1)],
		MainMeal: FirstFood.MealName,
		Details: getRandomMeals(),
		Amount: `$${getNumber(0, 450, false)}`,
		Status: getStatus(),
	});
}

fs.writeFileSync("Orders.json", JSON.stringify(mockdata));
