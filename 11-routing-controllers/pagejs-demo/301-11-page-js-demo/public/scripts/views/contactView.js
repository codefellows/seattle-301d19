// This is where we define the view for the "Contact" page
let contactView = {};

contactView.list = () => {
  outString = `<h1>This is supposed to be some kind of list</h1>`;
  $('main').html(outString);
  $.get('/contact-list', function(response){
    console.log(response);
  }).fail(function(err){
    console.error(err);
  });
};
contactView.single = (ctx) => {
  outString = `<h1>This is some HTML or something</h1>
  <p>The user went to a route containing ${ctx.params.username}`;
  $('main').html(outString);
};
