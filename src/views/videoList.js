var VideoListView = Backbone.View.extend({

  // el: '.list',

  render: function () {
    this.$el.children().detach();
    this.$el.html(this.template());


    // added:
    this.collection.map(function (video) {
      return new VideoListEntryView({ el: '.video-list', model: video }).render();
    });

    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
