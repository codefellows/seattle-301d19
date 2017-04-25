'use strict';

// TODO: Wrap the entire contents of this file in an IIFE.
// Pass in to the IIFE a module, upon which objects can be attached for later access.
(function(module) {

  var articleView = {};

  articleView.populateFilters = function() {
    $('article').each(function() {
      if (!$(this).hasClass('template')) {
        var val = $(this).find('address a').text();
        var optionTag = `<option value="${val}">${val}</option>`;
        if ($(`#author-filter option[value="${val}"]`).length === 0) {
          $('#author-filter').append(optionTag);
        }

        val = $(this).attr('data-category');
        optionTag = `<option value="${val}">${val}</option>`;
        if ($(`#category-filter option[value="${val}"]`).length === 0) {
          $('#category-filter').append(optionTag);
        }
      }
    });
  };

  articleView.handleAuthorFilter = function() {
    $('#author-filter').on('change', function() {
      if ($(this).val()) {
        $('article').hide();
        $(`article[data-author="${$(this).val()}"]`).fadeIn();
      } else {
        $('article').fadeIn();
        $('article.template').hide();
      }
      $('#category-filter').val('');
    });
  };

  articleView.handleCategoryFilter = function() {
    $('#category-filter').on('change', function() {
      if ($(this).val()) {
        $('article').hide();
        $(`article[data-category="${$(this).val()}"]`).fadeIn();
      } else {
        $('article').fadeIn();
        $('article.template').hide();
      }
      $('#author-filter').val('');
    });
  };

  articleView.handleMainNav = function() {
    $('.main-nav').on('click', '.tab', function() {
      $('.tab-content').hide();
      $(`#${$(this).data('content')}`).fadeIn();
    });

    $('.main-nav .tab:first').click();
  };

  articleView.setTeasers = function() {
    $('.article-body *:nth-of-type(n+2)').hide();

    $('#articles').on('click', 'a.read-on', function(e) {
      e.preventDefault();
      $(this).parent().find('*').fadeIn();
      $(this).hide();
    });
  };

  articleView.initNewArticlePage = function() {
    $('.tab-content').show();
    $('#export-field').hide();
    $('#article-json').on('focus', function(){
      this.select();
    });

    $('#new-form').on('change', 'input, textarea', articleView.create);
  };

  articleView.create = function() {
    var article;
    $('#articles').empty();

    article = new Article({
      title: $('#article-title').val(),
      author: $('#article-author').val(),
      authorUrl: $('#article-author-url').val(),
      category: $('#article-category').val(),
      body: $('#article-body').val(),
      publishedOn: $('#article-published:checked').length ? new Date() : null
    });

    $('#articles').append(article.toHtml());
    $('pre code').each((i, block) => hljs.highlightBlock(block));
    $('#export-field').show();
    $('#article-json').val(`${JSON.stringify(article)},`);
  };

  articleView.initIndexPage = function() {
    Article.all.forEach(a => $('#articles').append(a.toHtml()));

    articleView.populateFilters();
    articleView.handleCategoryFilter();
    articleView.handleAuthorFilter();
    articleView.handleMainNav();
    articleView.setTeasers();
  };

  articleView.initAdminPage = function() {
    // TODO: Call the Handlebars `.compile` function, which will return a function for you to use where needed.
    // Make sure you assign the result of your Handlebars.compile call to a variable called "template", since
    // we are then calling "template" on line 117.

    // REVIEW: We use `forEach` here because we are relying on the side-effects of the callback function:
    // appending to the DOM.
    // The callback is not required to return anything.
    Article.numWordsByAuthor().forEach(stat => $('.author-stats').append(template(stat)));

    // REVIEW: Simply write the correct values to the page:
    $('#blog-stats .articles').text(Article.all.length);
    $('#blog-stats .words').text(Article.numWordsAll());
  };
  module.articleView = articleView;
}(window))
