const performers = require('../data/performers.json')
const songs = require('../data/songs.json')
const { find, filter } = require('lodash')

/**
 * When wrapping a REST endpoint, the resolver will call out to the endpoint (instead of local data)
 * and map the data to the desired shape
 */
const allPerformers = () => performers

const performer = (_, {name}) => find(performers, {name})

const Performer = {
    songs: performer => filter(songs, {performerId: performer.id})
}

module.exports = { allPerformers, performer, Performer }

// {
//     performer(name: "Katy Perry") {
//         name
//     }
// }