var qhttp = require('q-io/http')

qhttp.read('http://localhost:7000')
.then((userId) => {
    return qhttp.read(`http://localhost:7001/${userId}`)
})
.then((user) => {
    console.log(JSON.parse(user))
})
.then(null, console.error)
.done()