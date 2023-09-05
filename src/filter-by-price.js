
import utils from "./utils/utils.js";

const { generateXlsxFile, generateJsonFile } = utils;

/**
 * Filtra las casas por precio máximo y genera archivos XLSX y JSON con las casas filtradas.
 * @param {Array} options.houses - Las casas a filtrar.
 * @param {number} options.maximumPrice - El precio máximo permitido para las casas.
 * @param {string} options.city - La ciudad de las casas.
 * @returns {void}
 */
function filterByPrice({ houses, maximumPrice, city }) {
	const filteredHouses = houses
		.filter((house) => isHousePriceBelowMaximum(house, maximumPrice))
		.map((house) => getHouseLocationAndUrl(house));

	generateXlsxFile(filteredHouses, city);
	generateJsonFile(filteredHouses, city);
}

/**
 * Comprueba si el precio de una casa es menor que el precio máximo dado.
 * @param {Object} house - La casa a comprobar.
 * @param {number} maximumPrice - El precio máximo permitido.
 * @returns {boolean} - Verdadero si el precio de la casa es menor que el precio máximo, falso en caso contrario.
 */
function isHousePriceBelowMaximum(house, maximumPrice) {
	const housePrice = Number(house.priceInCLP.replace("$", "").replace(/\./g, ""));
	return housePrice < maximumPrice;
}

/**
 * Devuelve un objeto con la ubicación y la URL de una casa.
 * @param {Object} house - El objeto de la casa del que se extraerá la ubicación y la URL.
 * @returns {Object} Un objeto con la ubicación y la URL de la casa.
 */
function getHouseLocationAndUrl(house) {
	return {
		Location: house.location,
		URL: house.url,
	};
}

export default filterByPrice;
