// const x = require('./myModule')
// import * as all from './myModule'

// import { name, surname, fullName } from "./myModule";

// console.log(name, surname, fullName);

import axios from "axios";

const ENDPOINT = "https://jsonplaceholder.typicode.com";

// axios
// 	.get(`${ENDPOINT}/users`)
// 	.then((response) => response.data)
// 	.then((users) => {
// 		axios
// 			.get(`${ENDPOINT}/posts`)
// 			.then((response) => response.data)
// 			.then((posts) => {
// 				axios
// 					.get(`${ENDPOINT}/albums`)
// 					.then((response) => response.data)
// 					.then((albums) => console.log(albums));
// 			});
// 	})
// 	.catch((e) => {
// 		console.log(e);
// 	});

async function getData() {
	try {
		const { data: users } = await axios.get(`${ENDPOINT}/users/1`);
		const { data: posts } = await axios.get(`${ENDPOINT}/posts/1`);
		const { data: albums } = await axios.get(`${ENDPOINT}/albums/1`);
		console.log(users, posts, albums);
	} catch (e) {
		console.log(e);
	}
}

getData();
