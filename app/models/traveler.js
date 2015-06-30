var mongoose = require('mongoose');
//https://scotch.io/tutorials/setting-up-a-mean-stack-single-page-application
module.exports = mongoose.model('Traveler', {
    name : {type : String, destinations: [ { location: String, visited: Boolean}]}
});