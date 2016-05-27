var apiKey = require('./../.env').apiKey;


exports.Projects = function(){

};

exports.Projects.prototype.getRepos = function(name, reposDisplay){
  $.get('https://api.github.com/users/' + name + '/repos?access_token='+ apiKey).then(function(response){
    reposDisplay(response);
  }).fail(function(error){
    $('#showprojects').text(error.responseJSON.message);
  });
};
