var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
    this.model = this.collection.models[0];
    this.collection.on('select', this.updateVideoPlayer, this);
  },

  updateVideoPlayer: function(event) {
    this.model = event;
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model));
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
