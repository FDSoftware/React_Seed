const fs = require("fs");

let Names = [];
const lineReader = require("readline").createInterface({
	input: require("fs").createReadStream("bulkNames"),
});

lineReader.on("line", function (line) {
	Names.push(line.trim());
});

lineReader.on("close", () => fs.writeFileSync("Names.json", JSON.stringify(Names)));
