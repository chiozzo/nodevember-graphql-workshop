const express = require('express')
const cors = require('cors')
const fs = require('fs')
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express')
const bodyParser = require('body-parser')
const schema = require('./schema')

const sendHTMLPage = (request, response) => {
    response.status(200).send(`
    <!DOCTYPE html>
    <html>
        <head>GraphQL and Apollo</head>
        <body>
            <h1>GraphQL Workshop</h1>
            <p>${schema}</p>
        </body>
    </html>
    `)
}

const app = express()
app.use(cors())
app.get('/', sendHTMLPage)
app.use('/graphql', bodyParser.json(), graphqlExpress({
    schema
}))
app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql'
}))
app.listen(4000, () => console.log('app is running on port 4000'))


// Beginning example from GitHub API
// query {
//     graphQLProject: repository(owner: "facebook", name: "graphql") {
//       ...repoFields
//     }
//     facebookProject: repository(owner: "facebook", name: "react") {
//       ...repoFields
//     }
//   }
  
//   fragment repoFields on Repository {
//     id
//     description
//     url
//   }
  
//   schema driven development