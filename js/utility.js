let getPosition = (level, toSearch) => {
	let position = [];
	let foundIt = false;
	level.forEach((element, index) => {
		if (!foundIt) {
			position[0] = element.findIndex(
				(v, i) => (foundIt = v === toSearch)
			);
			position[1] = position[0] !== null ? index : null;
		}
	});
	return position;
};

let getLevelPills = (level, toSearch) => {
	let pillCounter = 0;
	level.forEach((yElement) => {
		pillCounter =
			pillCounter + yElement.filter((x) => toSearch.includes(x)).length;
	});
	return pillCounter;
};

let removeScrollPage = () => {
	window.addEventListener(
		"keydown",
		function (e) {
			if (
				[
					"Space",
					"ArrowUp",
					"ArrowDown",
					"ArrowLeft",
					"ArrowRight",
				].indexOf(e.code) > -1
			) {
				e.preventDefault();
			}
		},
		false
	);
};

export { getPosition, getLevelPills, removeScrollPage };
