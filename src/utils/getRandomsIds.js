export default function getRandomIds(count, min = 1, max = 151) {
	const ids = new Set();
	while (ids.size < count) {
		ids.add(Math.floor(Math.random() * (max - min + 1)) + min);
	}
	return [...ids];
}