const express = require('express')
const app = express()
const fs = require('fs')
 
let users = JSON.parse(fs.readFileSync('User.json'))['62fbf740']
let games = JSON.parse(fs.readFileSync('gameDB.json'))
let gamesUsers = JSON.parse(fs.readFileSync('game_user-U.json'))

app.get('/games', function (req, res) {
  res.set('Access-Control-Allow-Origin', '*');
  res.send(games);
})

app.get('/users', function (req, res) {
  res.set('Access-Control-Allow-Origin', '*');
  res.send(users);
})

app.get('/users/:userId', function (req, res) {
  res.set('Access-Control-Allow-Origin', '*');
  res.send(users.find((user) => user.id == req.params.userId));
})


app.get('/users/gender/:userGender', function (req, res) {
  res.set('Access-Control-Allow-Origin', '*');
  res.send(users.filter((user) => user.gender == req.params.userGender));
})

app.get('/users/find/tidies', function (req, res) {
  res.set('Access-Control-Allow-Origin', '*');
  res.send(users.filter((user) => user.first_name.includes('tit')));
})

app.get('/gamesUsers', function (req, res) {
  res.set('Access-Control-Allow-Origin', '*');
  res.send(gamesUsers);
})

app.get('/gamesUsers/user/:id_user', function (req, res) {
  res.set('Access-Control-Allow-Origin', '*');
  res.send(gamesUsers.filter((gamesUsers) => gamesUsers.id_user == req.params.id_user));
})

app.listen(process.env.PORT || 8080, () => console.log("jestem gotuw na twojego fiuta, kogucie"))