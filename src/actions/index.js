export const heroesFetching = () => {
	return {
		type: "HEROES_FETCHING",
	};
};

export const heroesFetched = heroes => {
	return {
		type: "HEROES_FETCHED",
		payload: heroes,
	};
};

export const heroesFetchingError = () => {
	return {
		type: "HEROES_FETCHING_ERROR",
	};
};

export const heroIsDeleted = id => {
	return {
		type: "HERO_IS_DELETED",
		payload: id,
	};
};

export const heroIsAdded = hero => {
	return {
		type: "HERO_IS_ADDED",
		payload: hero,
	};
};
