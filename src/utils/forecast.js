const request = require('request')

//Used short hand syntax and destructured object
const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/a3c01932f1a3afc598b4269dd71138fc/' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => { //proxy parameter is needed after 'json' parameter if working on office network
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast