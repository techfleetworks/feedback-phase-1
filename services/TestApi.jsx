// 1
import { Axios } from 'axios';

// 2
const axios = new Axios({
	baseURL: "https://tranquil-journey-42623.herokuapp.com/",
	headers: {
		"Content-Type": "application/json",
	},
});

// 3
const TestAPIService = {
	find: async () => {
		const response = await axios.get("/test-evaluation-forms");
		return JSON.parse(response.data).data;
	},

	create: async ({ data }) => {
		const response = await axios.post(
			"/test-evaluation-forms",
			JSON.stringify({ data: data })
		);
		return JSON.parse(response.data).data;
	},

	update: async ({ id, data }) => {
		const response = await axios.put(
			`/test-evaluation-forms/${id}`,
			JSON.stringify({ data: data })
		);
		return JSON.parse(response.data).data;
	},

	delete: async ({ id }) => {
		const response = await axios.delete(`/test-evaluation-forms/${id}`);
		return JSON.parse(response.data).data;
	},
};

// 4
export { TestAPIService };