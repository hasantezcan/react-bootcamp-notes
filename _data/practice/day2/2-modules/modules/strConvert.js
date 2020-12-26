const lower = (text) => text.toLowerCase();

const sluger = (text, separator = "-") =>
	text.replace(/\s/g, separator).toLowerCase();

module.exports = { lower, sluger };
