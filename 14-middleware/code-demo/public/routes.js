'use strict';

page('/', index, success);
page();

function index (ctx, next) {
  $('#the-form').on('submit', function(event){
    event.preventDefault();
    let $username = $('#username').val();
    if ($username === 'someUser') {
      ctx.state.user = $username;
      ctx.save();
      next();
    }
  });
};

function success (ctx) {
  if (ctx.state.user) {
    $('body').html(`<h1>You are logged in for the success function! </h1>`);
  }
}
