var SearchView = Backbone.View.extend({

  events: {
    'click button': 'clickOrEnter',
    'enter': 'clickOrEnter'
  },

  clickOrEnter: function() {
    var userInput = $('.form-control').val();
    console.log('User input: ', userInput);
    this.collection.search(userInput);
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
