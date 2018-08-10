var Videos = Backbone.Collection.extend({

  url: 'https://www.googleapis.com/youtube/v3/search',

  model: Video,

  search: function (query) {

    this.fetch({
      data: {
        q: query,
        type: 'video',
        videoEmbeddable: true,
        maxResults: 5,
        key: window.YOUTUBE_API_KEY,
        part: 'snippet'
      }
    });
  },

  parse: function (response) {
    return response.items;
  }
});
