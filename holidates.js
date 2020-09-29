const axios = require('axios');
const { getCode } = require('country-list');

function getYear() {
    let d = new Date();
    let y = d.getFullYear();
    return y;
}

async function getData(country) {
    let code = getCode(country);
    let year = getYear();
    try {
        const response = await axios.get('https://date.nager.at/Api/v2/PublicHolidays/' + year + '/' + code);
        response.data.forEach(elem => console.log(elem.date + ": " + elem.localName + "(" + elem.name + ")"));
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    test: function (country) {
        getData(country);
    }
};