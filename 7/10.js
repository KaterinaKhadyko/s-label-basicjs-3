var Helpers = {
	clone: function (obj) {
		if(obj === null || typeof(obj) !== 'object' || 'isActiveClone' in obj)
			return obj;

		var temp = obj.constructor();

		for(var key in obj) {
			if(Object.prototype.hasOwnProperty.call(obj, key)) {
				obj['isActiveClone'] = null;
				temp[key] = clone(obj[key]);
				delete obj['isActiveClone'];
			}
		}

		return temp;
	}
};

Helpers.clone({});