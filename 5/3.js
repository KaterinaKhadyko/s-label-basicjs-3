var bit_tree = {
	id: 0,
	parent: null,
	data: 100,
	left: {
		id: 1,
		parent: 0,
		data: -10,
		left: null,
		right: {
			id: 2,
			parent: 1,
			data: 0,
			left: {
				id: 3,
				parent: 2,
				data: 15,
				left: null,
				right: null
			},
			right: null
		}
	},
	right: {
		id: 4,
		parent: 0,
		data: 100500,
		left: {
			id: 5,
			parent: 4,
			data: -240,
			left: {
				id: 6,
				parent: 5,
				data: 150150,
				left: null,
				right: null
			},
			right: null
		},
		right: null
	}
};