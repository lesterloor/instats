var express = require('express');
var router = express.Router();
var axios = require('axios');
const access_token="5724115162.7b3b2a3.97b6d6e6d0164830845fe2568e967da7"


/* GET home page. */
router.get('/', function(req, res, next) {

    res.render('index', { title: 'Instats'});

});
router.post('/users', function(req, res, next) {
  let searchUser = req.body.userInput
  console.log(searchUser);
  axios.get('https://api.instagram.com/v1/users/search?q='+searchUser+'&access_token='+access_token)
  .then(function (response) {

    console.log(response.data.data[0]);
    res.render('users', { data: response.data.data[0] });
  })
  .catch(function (error) {
    console.log(error);
  });



});

module.exports = router;
