'use strict';

$.ajax(`https://api.github.com/users/nhuntwalker`, {
  success: function(){
    alert('success!');
  },
  headers: {
    Authorization: `token ${token}`
  }
}).done(function(){});

$.get(`https://api.github.com/users/nhuntwalker?access_token=${token}`);
