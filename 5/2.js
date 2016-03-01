var tree = {
	id: 1,
	data: 0,
	childs: [
		{
			id: 2,
			data: 10,
			childs: [],
			parent: 1
		},
		{
			id: 3,
			data: 15,
			childs: [],
			parent: 1
		},
		{
			id: 4,
			data: 100,
			childs: [
				{
					id: 5,
					data: 25,
					childs: [],
					parent: 4
				},
				{
					id: 6,
					data: 150,
					childs: [],
					parent: 4
				}
			],
			parent: 1
		},
		{
			id: 7,
			data: 1500,
			childs: [],
			parent: 1
		}
	],
	parent: null
};

function search(tr, data) {
	if (tr.data != data) {
		var result;

		for (var index = 0; index < tr.childs.length; index++) {
			result = result || search(tr.childs[index], data);
		}

		return result;
	} else {
		return tr;
	}
}