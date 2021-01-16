const router = require('express').Router()

const getCurrencyRates = require('../controller/ratesController')

router.get('/rates', getCurrencyRates);
module.exports = router
