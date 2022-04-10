export function error(message) {
	return {
		message,
		status: false,
	};
}

export function success(message = "") {
	return {
		message,
		status: true,
	};
}

export const isEmpty = data => {
	if (
		!data ||
		(typeof data === "string" && data.trim().length === 0) ||
		(typeof data === "object" && data.length === 0)
	)
		return error("feild request!");
	return success();
};

export const isOver = (data, size, type = "length") => {
	if (type === "length" && data.trim().length > size)
		return error(`over size! (size < ${size})`);
	if (type === "number" && +data > size)
		return error(`over size (${data} < ${size})`);
	return success();
};

export const isSmall = (data, size) => {
	if (+data < size) return error(`small size (${data || "0"} < ${size})`);
	return success();
};

export const isType = (data, type) => {
	if (isNaN(data)) return error("type not correct!");
	if (typeof data === type) return success();
	return error("type not correct!");
};

export const isFileImg = data => {
	if (["png", "jpeg"].includes(data)) return success();
	return error(`file.${data} not file img (.png , .jpeg)`);
};
