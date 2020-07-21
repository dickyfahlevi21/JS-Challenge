// #4 Leap year detector
const detectLeapYear = (year1, year2) => {
    while (year1 <= year2) {
        let isLeap = new Date(year1, 1, 29).getDate() === 29;
        if (isLeap == true) console.log(`${year1} tahun kabisat`);
        else console.log(`${year1} bukan tahun kabisat`);
        year1++;
    }
}

detectLeapYear(2000, 2020);