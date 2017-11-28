const songs = require('../data/songs.json')
const performers = require('../data/performers.json')
const  { find } = require('lodash')

/**
 * When wrapping a REST endpoint, the resolver will call out to the endpoint (instead of local data)
 * and map the data to the desired shape
 */
const allSongs = () => songs

const song = (_, {title}) => find(songs, {title})

const Song = {
    performer: song => find(performers, {id: song.performerId})
}

module.exports = { allSongs, song, Song }

//  {
//     song(title: "Roar") {
//       id
//       title
//       numberOne
//     }
//   }