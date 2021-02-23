const needle = require('needle')

const Emoji = (ekode) => new Promise((resolve, reject) => {
    needle(`https://emojiapi.dev/api/v1/${ekode}/512.png`, (err, resp, body) => {
        if (!err) {
            resolve(body)
        }
    })
})

module.exports = Emoji