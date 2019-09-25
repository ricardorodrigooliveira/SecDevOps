var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
          response.send(
              'Continuous Integration (CI) is a development practice that requires developers to integrate code into a sh    ared repository several times a day. Each check-in is then verified by an automated build, allowing teams to detect problems early.'
          )
})

app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'))
})
