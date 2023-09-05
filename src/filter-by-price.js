
import utils from "./utils/utils.js";

const { generateXlsxFile, generateJsonFile } = utils;

function filterByPrice({ houses, maximumPrice, city }) {
	const filteredHouses = houses
		.filter((house) => isHousePriceBelowMaximum(house, maximumPrice))
		.map((house) => getHouseLocationAndUrl(house));

	generateXlsxFile(filteredHouses, city);
	generateJsonFile(filteredHouses, city);
}

function isHousePriceBelowMaximum(house, maximumPrice) {
	const housePrice = Number(house.priceInCLP.replace("$", "").replace(/\./g, ""));
	return housePrice < maximumPrice;
}

function getHouseLocationAndUrl(house) {
	return {
		Location: house.location,
		URL: house.url,
	};
}

export default filterByPrice;
