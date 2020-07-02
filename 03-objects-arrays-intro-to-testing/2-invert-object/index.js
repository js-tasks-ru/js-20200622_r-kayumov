/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns new object or undefined if nothing did't pass
 */
export function invertObj(obj) {
if (typeof obj === "undefined") {
	return undefined;
}

let someObj = {};
let transformedObj = Object.keys(obj).forEach(function(key) {
	let value = obj[key];
	someObj[value] = key;
	});
return someObj;
}