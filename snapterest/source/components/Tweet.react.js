var React = require('react');

var tweetStyle = {
  position: 'relative',
  display: 'block',
  width: 'auto',
  height: '100%',
  maxHeight: '250px',
  margin: '0 auto 10px auto'
};

var imageStyle = {
  display: 'block',
  width: 'auto',
  maxHeight: '250px',
  boxShadow: '0px 1px 1px 0px #aaa',
  border: '1px solid #fff',
  margin: '0 auto'
};

var Tweet = React.createClass({

  propTypes: {
    tweet: function(properties, propertyName, componentName) {
      var tweet = properties[propertyName];

      if (! tweet) {
        return new Error('Tweet must be set.');
      }

      if (! tweet.media) {
        return new Error('Tweet must have an image.');
      }
    },
    onImageClick: React.PropTypes.func
  },

  handleImageClick: function () {
    var tweet = this.props.tweet;
    var onImageClick = this.props.onImageClick;

    if (onImageClick) {
      onImageClick(tweet);
    } 
  },

  render: function () {
    var tweet = this.props.tweet;
    var tweetMediaUrl = tweet.media[0].url;

    return (
      <div style={tweetStyle}>
        <img src={tweetMediaUrl} onClick={this.handleImageClick} style={imageStyle} />
      </div>
    );
  }
});

module.exports = Tweet;