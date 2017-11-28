const { allSongs, song, Song } = require('./songs')
const { allPerformers, performer, Performer } = require('./performers')

const resolvers = {
    Query: {
        allSongs,
        song,
        allPerformers,
        performer
    },
    Song,
    Performer
}

module.exports = resolvers