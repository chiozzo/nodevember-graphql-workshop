const { makeExecutableSchema } = require('graphql-tools')
const fs = require('fs')
const resolvers = require('./resolvers')

const schema = fs.readFileSync('./schema.graphql', 'utf-8')

const executableSchema = makeExecutableSchema({
    typeDefs: schema,
    resolvers
})

module.exports = executableSchema