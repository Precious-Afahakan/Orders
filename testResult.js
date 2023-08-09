let userDataBase = [];
let orderBlock = [];
const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

const validateOrder = (order) => {
	if (!order) {
		return "Provide valid order";
	}
	if (typeof order.name !== "string") {
		return "Provide valid name";
	} else if (order.name.trim() == "") {
		return "Provide name in a string";
	} else if (typeof order.item !== "string") {
		return "Provide a valid order item";
	} else if (order.item.trim() == "") {
		return "Provide order item(s) in a string";
	} else if (typeof order.price !== "number") {
		return "Price(s) should be written as a number";
	} else if (!order.price) {
		return "Provide valid price";
	}
};

const validateDataInput = (data) => {
	if (!data) {
		return "Provide valid input";
	}

	if (typeof data.email !== "string") {
		return "Provide Email in a string";
	} else if (data.email.trim() === "") {
		return "Email cannot be empty";
	} else if (pattern.test(data.email) === false) {
		return "Provide valid Email";
	} else if (typeof data.firstname !== "string") {
		return "Provide name in a string";
	} else if (data.firstname.trim() === "") {
		return "First name is required";
	} else if (data.firstname.length > 15 || data.firstname.length < 3) {
		return "Name character cannot be longer than 15 or shorter than 3";
	} else if (data.firstname.includes("@") === true) {
		return "Name does not require special characters";
	} else if (typeof data.lastname !== "string") {
		return "Provide name in a string";
	} else if (data.lastname.trim() === "") {
		return "Last name is required";
	} else if (data.lastname.length > 15 || data.lastname.length < 3) {
		return "Name characters cannot be longer than 15 or shorter than 3";
	} else if (data.lastname.includes("@") == true) {
		return "Name does not require special characters";
	} else if (typeof data.password !== "string") {
		return "Provide valid password";
	} else if (data.password.trim() == "") {
		return "Password cannot be empty";
	} else if (data.password.length < 8) {
		return "Provide longer password";
	} else if (data.password == null || data.password == undefined) {
		return "provide a valid password";
	}
	return;
};

const register = (data) => {
	const potentialError = validateDataInput(data);
	if (potentialError) {
		console.log("iii", potentialError);
		return;
	}
	const { firstname, lastname, email, password } = data;
	let database = {
		id: userDataBase.length + 1,
		fullname: lastname + " " + firstname,
		email,
		password,
		createdAt: new Date().toLocaleString("en-US", {
			month: "long",
			day: "numeric",
			hour: "numeric",
			minute: "numeric",
			hour12: true,
		}),
		updatedAt: new Date().toLocaleString("en-US", {
			month: "long",
			day: "numeric",
			hour: "numeric",
			minute: "numeric",
			hour12: true,
		}),
	};
	userDataBase.push(database);
};

const registerMany = (inputs) => {
	inputs.map((userInput) => {
		const potentialError = validateDataInput(userInput);
		if (potentialError) {
			console.log("second", potentialError);
		} else {
			const { firstname, lastname, email, password } = userInput;
			let input = {
				id: userDataBase.length + 1,
				fullname: lastname + " " + firstname,
				email,
				password,
				createdAt: new Date().toLocaleString("en-US", {
					month: "long",
					day: "numeric",
					hour: "numeric",
					minute: "numeric",
					hour12: true,
				}),
				updatedAt: new Date().toLocaleString("en-US", {
					month: "long",
					day: "numeric",
					hour: "numeric",
					minute: "numeric",
					hour12: true,
				}),
			};
			userDataBase.push(input);
		}
	});
};

/*
const updateOne = (id) => {
	const dataUpdate = userDataBase.map((user) => {
		if (user.id == id) {
			return { ...user, firstname: "Ian" };
		}
		return user;
	});
	userDataBase = dataUpdate;
};
*/

/*[
					{ id: 1, userModel: "name", newValue: "Issac" },
					{ id: 1, userModel: "name", newValue: "Issac" },
				];*/

//I DEY HERE FOR NOW

const getOne = (id) => {
	userDataBase.map((users) => {
		if (users.id == id) {
			console.log(users);
		} else {
			console.log("Id not found");
			//console.log(`Item id not found${orderBlock.indexOf(order)}`);
		}
	});
};

const getMany = (inputs) => {
	userDataBase.forEach((user) => {
		inputs.map((id) => {
			if (user.id == id) {
				console.log(user);
			}
		});
	});
};

// const deleteOne = (id) => {
// 	userDataBase.map((user) => {
// 		if (id == user.id) {
// 			let deleteVal = userDataBase.indexOf(user);
// 			userDataBase.splice(deleteVal, 1);
// 		}
// 	});
// };

const createOrder = (order) => {
	let potentialError = validateOrder(order);
	if (potentialError) {
		console.log(potentialError);
	} else {
		let clientOrder = {
			itemId: orderBlock.length + 1,
			name: order.name,
			item: order.item,
			price: order.price,
		};
		orderBlock.push(clientOrder);
	}
};

const createOrders = (orders) => {
	orders.map((order) => {
		let potentialError = validateOrder(order);
		if (potentialError) {
			console.log(potentialError);
		} else {
			const { name, item, price } = order;
			let clientOrders = {
				itemId: orderBlock.length + 1,
				name,
				item,
				price,
			};
			orderBlock.push(clientOrders);
		}
	});
};

const updateOrder = (userId) => {
	const newOrder = orderBlock.map((orders) => {
		if (orders.itemId === userId) {
			return { ...orders, item: "Corn flour" };
		}
		return orders;
	});
	orderBlock = newOrder;
};

const getOrder = (id) => {
	orderBlock.map((order) => {
		if (order.itemId == id) {
			console.log(order);
		} else {
			console.log("Item Id not found");
			//console.log(`Item id not found${orderBlock.indexOf(order)}`);
		}
	});
};

const getOrders = (inputs) => {
	orderBlock.forEach((order) => {
		inputs.map((id) => {
			if (order.itemId == id) {
				console.log(order);
			}
		});
	});
};

const deleteOrder = (num) => {
	orderBlock.forEach((order) => {
		if (order.itemId === num) {
			let deleteOrder = orderBlock.indexOf(order);
			orderBlock.splice(deleteOrder, 1);
		}
	});
};

const deleteOrders = (inputs) => {
	orderBlock.forEach((user) => {
		inputs.map((id) => {
			if (user.id == id) {
				let deleteOrder = orderBlock.indexOf(user);
				orderBlock.splice(deleteOrder, 1);
			}
		});
	});
};
//------------------------------------RESULT CHECKER-------------------------------------------------
register({
	firstname: "Abel",
	lastname: "Ola",
	email: "abeltola@gmail.com",
	password: "idtagfasttsat",
});

registerMany([
	{
		firstname: "Titi ",
		lastname: "Sam",
		email: "tayo2@gmail.com",
		password: "iiijjjkkk",
	},

	{
		firstname: "Isaac",
		lastname: "Tim",
		email: "timisaac@gmail.com",
		password: "uuuftdt5e78",
	},
]);

//deleteOne(3);
//console.log("before-get", userDataBase);
//getMany([2, 3]);
//console.log("after-get", userDataBase);
//getOne(2);

//updateOne(1);
createOrder({ name: "Gbemi", item: "curry chicken", price: 7000 });
createOrders([
	{ name: "Tolu", item: "Fried rice", price: 8000 },
	{ name: "Tope", item: "fried fish", price: 3000 },
]);
deleteOrders([1, 2]);

//getOrders([1, 2]);
// //updateOrder(2);
//console.log("i dey here", orderBlock);
//getOrder(1);
//console.log("deleteorder", orderBlock);
//deleteOrder(1);
console.log("na here i dey", orderBlock);
//console.log("i dey check something", userDataBase);
