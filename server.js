const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 8080

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => {
    res.render('index')

   })
   .get('/covid19', (req, res) => {
    var csv = require("csvtojson");
    csv()
    .fromFile("../covid19-nz/covid19-nz.csv")
    .then((data)=>{
        res.render('draw_covid_data',{data:data})
        });
    })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

