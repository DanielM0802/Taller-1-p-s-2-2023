import XLSX from "xlsx";
import fs from "fs";

function generateXlsxFile(houses, city) {
	const workSheet = XLSX.utils.json_to_sheet(houses);
	const workBook = XLSX.utils.book_new();
	XLSX.utils.book_append_sheet(workBook, workSheet, "Houses");
	XLSX.writeFile(workBook, `./xlsx/${city}.xlsx`);
	console.log(`${city} XLSX File generated successfully`);
}

function generateJsonFile(houses, city) {
	fs.writeFile(`./json/${city}.json`, JSON.stringify(houses), (err) => {
		if (err) {
			console.log(err);
		}
		console.log(`${city} JSON generated successfully`);
	});
}

const utils = {
    generateXlsxFile,
    generateJsonFile,
}

export default utils;