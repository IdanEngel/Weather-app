const express = require('express')
const router = express.Router()
const city = require('../model/city')
const request = require('request')

router.get('/city/:cityName', function (req, res) {
    let name = req.params.cityName
    request(`https://api.apixu.com/v1/current.json?key=81abec970d3044dc975114043181912&q=${name}`, function (err, response, body) {
        let data = JSON.parse(body)
        res.send(data)
    })
})

router.get('/cities', function (req, res) {
    city.find({}, function (err, data) {
        res.send(data)
    })
})

router.post('/city', function (req, res) {
    let cityImport = new city(req.body)
    console.log(req.body)
    cityImport.save()
    res.end()
})

router.delete('/city/:cityName', function (req, res) {
    let data = req.params.cityName
    let newData = data.charAt(0).toUpperCase() + data.slice(1)
    city.findOneAndDelete({ name: newData }, function (err) {
    })
    res.end()

})


module.exports = router
// let cityImport = new city({
    //     name: req.body.location.name,
    //     updatedAt: req.body.current.last_updated,
    //     temperture: req.body.current.temp_c,
    //     condition: req.body.current.condition.text,
    //     conditionPic: req.body.current.condition.icon
// })