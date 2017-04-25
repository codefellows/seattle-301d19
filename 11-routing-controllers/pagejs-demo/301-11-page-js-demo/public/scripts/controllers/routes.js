// This is where we define the client-side routes
let outString = '';

page('/', () => {
  outString = `
    <h1 id="content">THIS IS THE HOME PAGE</h1>
    <ul id="contacts">
      <li><a href="/contact/sam">Sam</a></li>
    </ul>
  `;
  $('main').html(outString);
});
page('/about', () => {
  outString = `
    <h1 id="content">THIS IS THE ABOUT PAGE</h1>
    <ul id="contacts">
      <li><a href="/contact/sam">Sam</a></li>
    </ul>
  `;
  $('main').html(outString);
});
page('/contact', contactView.list);
page('/contact/:username', contactView.single);
page('/*', () => {
  outString = `<h1>BOOOO YOU GET A 404!</h1>`;
  $('main').html(outString);
})
page();
