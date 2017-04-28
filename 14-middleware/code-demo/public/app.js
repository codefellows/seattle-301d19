function index(ctx){

  ctx.state.authenticated = false;

  $('#the-form').on('submit', function(event){
    event.preventDefault();
    let username = $('#username').val();
    let password = $('#password').val();

    console.log(ctx);

    if (username === 'nhuntwalker' && password === 'potato') {
      ctx.state.authenticated = true;
      page.redirect('/success');
    } else {
      ctx.state.authenticated = false;
      window.location = '/';
    }

  });

  if (ctx.state.authenticated) {
    $('body').html('<h1>Youre logged in!</h1>');
  }
}

function success(ctx) {
    console.log(ctx);
    if (ctx.state.authenticated) {
      $('body').html('');
    }
}
