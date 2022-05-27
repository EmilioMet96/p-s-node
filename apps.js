const express = require('express')


const apps = express()
apps.get('/',(_req, res) => {
        res.send('Hola mundo!!')
    })
apps.listen(8080)
