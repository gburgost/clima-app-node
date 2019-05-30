const axios = require('axios');


const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=e35c1a28c664fb97af4ce20abe9049f9&units=metric`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}