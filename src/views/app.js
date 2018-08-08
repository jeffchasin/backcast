var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.render();
  },


  render: function() {

    this.$el.html(this.template());

    new VideoListView({ el: '.list', collection: this.videos }).render();

    // this.listView = new VideoListView(this.videos);
    return this;
  },

  template: templateURL('src/templates/app.html')

});
