var VideoListEntryView = Backbone.View.extend({

  events: {
    'click .video-list-entry-title': 'handleClick',
  },

  handleClick: function(e) {
    this.model.select();
    new VideoPlayerView({ el: '.player', model: this.model }).render();
  },

  render: function () {
    this.$el.html(this.template(this.model.attributes));
    // this.$el.append(this.template(this.model.attributes));
    return this.$el;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
