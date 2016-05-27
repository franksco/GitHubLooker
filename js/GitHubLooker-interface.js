var apiKey = require('./../.env').apiKey;
var Projects = require('./../js/GitHub-app.js').Projects;

var reposDisplay = function(repoList) {
  repoList.forEach(function(repo){
    if (repo.description) {
      $(".showprojects").append("<li>" + repo.name + "</li><li>Description: " + repo.description + "</li><hr>" );
    } else {
      $(".showprojects").append("<li>" + repo.name + "</li><hr>" );
    };
  });
};


$(document).ready(function() {
  var currentGithubUserObject = new Projects();
  $('#userProjects').click(function() {
    var name = $('#username').val();
    $('#username').val("");
    currentGithubUserObject.getRepos(name, reposDisplay);
  });
});
