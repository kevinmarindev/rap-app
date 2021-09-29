const express = require('express')
const app = express()
const PORT = 9000
const cors = require('cors')


app.use(cors())

let rappers = {
    'drake':{
    'country': 'canada',
    'album': 'CLB',
    'genre': 'Hip-hop'
    },
    'kanye':{
    'country': 'US',
    'album': 'Donda',
    'genre': 'Hip-hop'
    },
    'unknown':{
    'country': 'unknown',
    'album': 'unknown',
    'genre': 'unknown'
    }
}
//get takes in two params the first one being the route where it should activate the second being a function which take two params as well (req, res)
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})
//the colon means it is a param
app.get('/api/rappers/:rapperName', (req, res) =>{
    const rapName= req.params.rapperName.toLowerCase();
    console.log(rapName)
    if(rappers[rapName])res.json(rappers[rapName])
    else res.json(rappers['unknown'])
    
})


app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})