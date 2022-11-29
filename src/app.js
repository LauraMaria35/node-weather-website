const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()
const port = process.env.PORT || 3000

//Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
container: `
        
      `
})
})

app.get('/about', (req, res) => {
    res.render('about', {
citat1: `Dacă ai ochii albaștri vezi totul albastru?`,
citat2: `Oare cum era când totul în jur era alb-negru? Bunicii trebuie să știe.`
})
})

app.get('/weather', (req, res) => {
    res.send([
        {
          "id": 2803139,
          "name": "Antwerpen",
          "country": "BE",
          "coord": {
            "lon": 4.41667,
            "lat": 51.216671
          }
        },
        {
          "id": 745042,
          "name": "Istanbul",
          "country": "TR",
          "coord": {
            "lon": 28.983311,
            "lat": 41.03508
          }
        },
        {
          "id": 658226,
          "name": "Helsinki",
          "country": "FI",
          "coord": {
            "lon": 24.93417,
            "lat": 60.17556
          }
        },
        {
          "id": 5815135,
          "name": "Washington",
          "country": "US",
          "coord": {
            "lon": -120.501472,
            "lat": 47.500118
          }
        },
        {
          "id": 668997,
          "name": "Reghin",
          "country": "RO",
          "coord": {
            "lon": 24.70216,
            "lat": 46.7742
          }
        },
        {
          "id": 681850,
          "name": "Campulung",
          "country": "RO",
          "coord": {
            "lon": 25.049999,
            "lat": 45.26667
          }
        },
        {
          "id": 677463,
          "name": "Onesti",
          "country": "RO",
          "coord": {
            "lon": 26.75,
            "lat": 46.25
          }
        },
        {
          "id": 681862,
          "name": "Campina",
          "country": "RO",
          "coord": {
            "lon": 25.73333,
            "lat": 45.133331
          }
        },
        {
          "id": 2655603,
          "name": "Birmingham",
          "country": "GB",
          "coord": {
            "lon": -1.89983,
            "lat": 52.481419
          }
        },
        {
          "id": 5128638,
          "name": "New York",
          "country": "US",
          "coord": {
            "lon": -75.499901,
            "lat": 43.000351
          }
        },
        {
          "id": 536203,
          "name": "Sankt-Peterburg",
          "country": "RU",
          "coord": {
            "lon": 30.25,
            "lat": 59.916668
          }
        },
        {
          "id": 1273294,
          "name": "Delhi",
          "country": "IN",
          "coord": {
            "lon": 77.216667,
            "lat": 28.666668
          }
        },
        {
          "id": 2800482,
          "name": "Charleroi",
          "country": "BE",
          "coord": {
            "lon": 4.44654,
            "lat": 50.412998
          }
        },
        {
          "id": 2618425,
          "name": "Copenhaga",
          "state": "",
          "country": "DK",
          "coord": {
              "lon": 12.56553,
              "lat": 55.675941
          }
        },
        {
          "id": 679550,
          "name": "Dej",
          "country": "RO",
          "coord": {
            "lon": 23.866671,
            "lat": 47.150002
          }
        },
        {
          "id": 681290,
          "name": "Cluj-Napoca",
          "country": "RO",
          "coord": {
            "lon": 23.6,
            "lat": 46.76667
          }
        },
        {
          "id": 2800867,
          "name": "Bruxelles",
          "country": "BE",
          "coord": {
            "lon": 4.35144,
            "lat": 50.853321
          }
        },
        {
          "id": 673441,
          "name": "Miercurea-Ciuc",
          "country": "RO",
          "coord": {
            "lon": 25.799999,
            "lat": 46.349998
          }
        },
        {
          "id": 683506,
          "name": "Bucuresti",
          "state": "",
          "country": "RO",
          "coord": {
              "lon": 26.10626,
              "lat": 44.432251
          }
        },
          {
            "id": 686253,
            "name": "Arad",
            "state": "",
            "country": "RO",
            "coord": {
                "lon": 21.75,
                "lat": 46.333328
            }
        },
        {
          "id": 5128581,
          "name": "New York City",
          "state": "NY",
          "country": "US",
          "coord": {
              "lon": -74.005966,
              "lat": 40.714272
          }
        },
        {
          "id": 2950158,
          "name": "Berlin",
          "state": "",
          "country": "DE",
          "coord": {
              "lon": 10.45,
              "lat": 54.033329
          }
        },
        {
          "id": 6356055,
          "name": "Barcelona",
          "state": "",
          "country": "ES",
          "coord": {
              "lon": 2.12804,
              "lat": 41.399422
          }
        }
      ])
})
// app.com
// app.com/help
// app.com/about

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
