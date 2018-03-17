Array.prototype.first = function() {
	if (this) {
	return this[0];
	}
	else{
		return null;
	}
};
Array.prototype.last = function() {
	if (this) {
	return this[Array.length-1];
	}
	else{
		return null;
	}
};