// Require Node's http module and assign it to a variable
var http = require('http')

// Create a new server that just says "Hi!!" at every route
var server = http.createServer(function (request, response) {
  if (request.url === '/') {
    response.end('<h1>Hi there!</h1>' +
    '<h3>Click on a link to explore.</h3>' +
    '<a href="/random-joke">Here is a random joke.</a>' +
    '<br>' +
    '<a href="/cuteness">Cuteness awaits.</a>')
  } else if (request.url === '/random-joke') {
    var randomNumber = Math.random()
    if (randomNumber > 0.7) {
      response.end('<h1>Here is a joke1.</h1>' +
      '<p id="joke"> knock knock. Whos there? Deja. Deja who? Knock knock.</p>' +
      '<a href="/">Home</a>')
    } else if (randomNumber > 0.4) {
      response.end('<h1>Here is a joke2.</h1>' +
      '<p id="joke"> Knock, knock. Whos there? No one. No one who? (Remain silent)</p>' +
      '<a href="/">Home</a>')
    } else {
      response.end('<h1>Here is a joke3.</h1>' +
      '<p id="joke"> Whos there? Double. Double who? W!</p>' +
      '<a href="/">Home</a>')
    }
  } else if (request.url === '/cuteness') {
    response.end('<h1>A cute pupper.</h1>' +
      '<img src="http://i.imgur.com/VUECagM.jpg" alt="doggy" width="500">' +
      '<br>' +
      '<a href="/">Home</a>')
  } else {
    response.end('<h1>404. That is an error.</h3>' +
    '<p>The requested URL: ' + request.url + ' was not found on this server.</p>' +
    '<br>' +
    '<img src="http://fullspoonrising.com/wp-content/uploads/2014/08/116839.jpg" alt="sorry">' +
    '<br>' +
    '<a href="/">Home</a>')
  }
})

// Listen on port 8080, so that we can reach the app at
// localhost:8080
var port = process.env.PORT || 8080
server.listen(port)

// Output a friendly message to the terminal
console.log('Server running at port ' + port)
