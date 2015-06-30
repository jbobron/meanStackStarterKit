angular.module('MainService',[]).factory('Main', ['$http', function($http){
  return {
    get : function(){
      return $http.get('/api/travelers');
    },
    //placeholder
    create : function(travelerData){
      return $http.post('/api/travelers', travelerData)
    },
    //placeholder
    delete : function(id){
      return $http.delete('/api/travelers/' + id)
    }
  }
}]);