const express = require('express')
const app = express()
const fs = require('fs')
var cors = require('cors')

let users = JSON.parse(fs.readFileSync('User.json'))['62fbf740']
let games = JSON.parse(fs.readFileSync('gameDB.json'))
let gamesUsers = JSON.parse(fs.readFileSync('game_user.json'))

app.use(cors())

// All games
app.get('/games', function (req, res) {
  res.send(games);
})

// All users
app.get('/users', function (req, res) {
  res.send(users);
})

// All pairs of IDs for a game and user
app.get('/gamesUsers', function (req, res) {
  res.send(gamesUsers);
})

// User with specified ID
app.get('/users/:userId', function (req, res) {
  res.send(users.find((user) => user.id == req.params.userId));
})

// Users with specified gender
app.get('/users/gender/:userGender', function (req, res) {
  res.send(users.filter((user) => user.gender == req.params.userGender));
})

// Looking for users with tidies xddd
app.get('/users/find/tidies', function (req, res) {
  res.send(users.filter((user) => user.first_name.includes('tit')));
})

// Pairs of IDs for game and specified user (what games that user has)
app.get('/gamesUsers/user/:id_user', function (req, res) {
  res.send(gamesUsers.filter((gamesUsers) => gamesUsers.id_user == req.params.id_user));
})

// Pairs of IDs for specified game and user (which users have that game)
app.get('/gamesUsers/game/:id_game', function (req, res) {
  res.send(gamesUsers.filter((gamesUsers) => gamesUsers.id_game == req.params.id_game));
})

// Game with specified ID
app.get('/games/:gameId', function (req, res) {
  res.send(games.find((game) => game.id == req.params.gameId));
})

// Games with specified genre
app.get('/games/genres/:genre', function (req, res) {
  res.send(games.filter((game) => game.genre == req.params.genre));
})

// Games with specified name (or part of it)
app.get('/games/find/:name', function (req, res) {
  //res.set('Access-Control-Allow-Origin', '*');
  res.send(games.filter((game) => game.game_name.toLowerCase().includes(req.params.name.toLowerCase())));
})

app.listen(process.env.PORT || 8080, () => console.log("jestem gotuw na teges szmeges fą fą fą"))