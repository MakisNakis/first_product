import ky from 'ky-universal'

const api = ky.extend({
    prefixUrl: process.env.SERVER_API,
    // hooks: {
	// 	beforeRequest: [
	// 		request => {
	// 			request.headers.set('Content-Type', 'application/json');
	// 		}
	// 	]
	// }
})

export default api
