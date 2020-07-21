let csv = `NAME, CATEGORY, PRICE
Xiaomi Redmi 5A, Smartphone, 1199000
Macbook Air, Laptop, 13775000
Samsung Galaxy J7, Smartphone, 3549000
DELL XPS 13, Laptop, 26799000
Xiaomi Mi 6, Smartphone, 5399000
LG V30 Plus, Smartphone, 10499000`

function makeObject() {

    let csvSplit = csv.split("\n");
    let key = csvSplit[0].split(', ');
    let objOutput = []

    for (let i = 0; i < csvSplit.length; i++) {
        let newObj = {}
        let colCsvSplit = csvSplit[i].split(", ")

        for (let j = 0; j < colCsvSplit.length; j++) {

            newObj[key[j].toLowerCase()] = colCsvSplit[j]

        }
        objOutput.push(newObj)
    }
    console.log(objOutput);
}
makeObject(csv);