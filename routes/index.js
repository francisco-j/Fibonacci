const { Router } = require('express')
const getFibonacci = require('../providers/fibonacci')

const router = Router()

router.get('/value/:index', (req, res)=>{
    const index = req.params.index || 0
    let value = getFibonacci(index)
    res.send(value.toString())
})

module.exports = router
