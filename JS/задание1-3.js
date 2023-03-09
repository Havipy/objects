let animal = {
	eats: true
};

let fish = Object.create(animal);
fish.swims = true;

function showObjKeys(obj) {
	for (let key in obj) {
		let isOwn = obj.hasOwnProperty(key);
		if (isOwn) {
			console.log(`Our: ${key}`);
		}
	}
}
function isKey(str, obj) {
	if (str in obj) {
		return true;
	}
	return false;
}
function createNullObject() {
	return Object.create(null);
}

showObjKeys(fish);
console.log(createNullObject());
console.log(isKey("eats", fish));