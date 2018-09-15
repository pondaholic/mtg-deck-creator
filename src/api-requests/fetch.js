// export default function searchMagic(values) {
// 	const BASE_URL = 'https://api.magicthegathering.io/v1/cards';
// 	let searchTerm;
// 	let key;
// 	for (key in values) {
// 		if (values[key]) {
// 			searchTerm = encodeURIComponent(`%${values[key]}%`);
// 		}
// 	}

// 	return fetch(`${BASE_URL}/?${key}=${searchTerm}`, {
// 		method: 'GET',
// 		headers: { 'Content-Type': 'application/json' }
// 	}).then(res => {
// 		if (!res.ok) {
// 			if (
// 				res.headers.has('content-type') &&
// 				res.headers.get('content-type').startsWith('application/json')
// 			) {
// 				console.log(res.json());
// 				return res.json().then(err => Promise.reject(err));
// 			}
// 			return Promise.reject({
// 				code: res.status,
// 				message: res.statusText
// 			});
// 		}
// 		return res.json();
// 	});
// }
