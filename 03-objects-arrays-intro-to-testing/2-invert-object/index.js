/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns new object or undefined if nothing did't pass
 */
export function invertObj(obj) {
if (obj) {
    const someObj = {};
    
    Object.keys(obj).forEach(function(key) {
	      const value = obj[key];
	      someObj[value] = key;
	  });
    
    return someObj;
  }
}