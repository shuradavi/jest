const axios = require('axios');
const mapArrToString = require('../mapArrToString/mapArrToString');

const getData = async () => {
	try {
		const res = await axios.get('https://jsonplaceholder.org/users/3')
		const userIds = res.data.map(user => user.id)
		return userIds
	} catch (error) {
		console.log(error);
	}

}

module.exports = getData;