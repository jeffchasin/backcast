var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.render();
  },


  render: function() {
    // this.listView = new VideoListView(this.videos);
    // this.$el.html(this.template(this.listView));
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
