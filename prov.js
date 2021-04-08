const express = require('express')
const app = express()
const fs = require('fs')
 
let users = JSON.parse(fs.readFileSync('User.json'))['62fbf740']

app.get('/users', function (req, res) {
  res.send(users);
})

app.get('/users/:userId', function (req, res) {
  res.send(users.find((user) => user.id == req.params.userId));
})


app.get('/users/gender/:userGender', function (req, res) {
  res.send(users.filter((user) => user.gender == req.params.userGender));
})

app.get('/users/find/tidies', function (req, res) {
  res.send(users.filter((user) => user.first_name.includes('tit')));
})
 
app.listen(env.PORT || 8080, () => console.log("jestem gotuw na twojego fiuta, kogucie"))