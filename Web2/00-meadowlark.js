const express = require('express')
const app = express()
const port = process.env.PORT || 3000
// custom 404 page
app.use((req, res)=> {
    res.type('text/plain')
    res.status(404)
    res.send('404 - Not found')
})
// custom 500 page
app.use((err, req, res, next)=> {
    console.error(err,massage)
    res.type('text/plain')
    res.status(500)
    res.send('500 - Server Error')
})

app.listen(port, ()=> console.log(
    'Express started in http://ldcalhost:$(port);  '+
    'press  Ctrl-C to terminate...'))