var Traveler = require('./models/traveler');

module.exports = function(app) {

  //BACK END ROUTES ====================================
  //api route
  app.get('/api/travelers', function(req, res){
    //get all travelers from DB
    Traveler.find(function(err, travelers){
      if(err) res.sendFile(err);
      res.json(travelers);
    });
  });

   // route to handle creating goes here (app.post)
   // route to handle delete goes here (app.delete)
  

  //FRONT END ROUTES ===================================
  //route to handle all angular requests
  app.get('*', function(req,res) {
    res.sendFile('./public/views/index/html')
  })

}