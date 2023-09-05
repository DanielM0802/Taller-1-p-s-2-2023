import XLSX from "xlsx";
import fs from "fs";

/**
 * Genera un archivo XLSX con los datos de las casas y lo guarda en la ubicación especificada.
 * @param {Array} houses - Un array de objetos que contienen los datos de las casas.
 * @param {string} city - El nombre de la ciudad donde se encuentran las casas.
 */
function generateXlsxFile(houses, city) {
	// Crear una hoja de trabajo a partir de los datos de las casas.
	const workSheet = XLSX.utils.json_to_sheet(houses);

	// Crear un libro de trabajo y agregar la hoja de trabajo.
	const workBook = XLSX.utils.book_new();

	XLSX.utils.book_append_sheet(workBook, workSheet, "Houses");

	const filePath = `./xlsx/${city}.xlsx`;
	XLSX.writeFile(workBook, filePath);
	console.log(`${city} XLSX File generated successfully`);
}

/**
 * Genera un archivo JSON con los datos de las casas y el nombre de la ciudad.
 * @param {Array} houses - Un array de objetos que contienen los datos de las casas.
 * @param {string} city - El nombre de la ciudad donde se encuentran las casas.
 */
function generateJsonFile(houses, city) {
	const filePath = `./json/${city}.json`;
	const jsonData = JSON.stringify(houses);

	writeJsonToFile(filePath, jsonData, city);

}

function writeJsonToFile(filePath, jsonData, city) {
    fs.writeFile(filePath, jsonData, (err) => {
        if (err) {
            console.log(err);
        }
        console.log(`${city} JSON generated successfully`);
    });
}

const utils = {
    generateXlsxFile,
    generateJsonFile,
	writeJsonToFile
}

export default utils;