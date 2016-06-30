var React = require('react');
var ReactDOMServer = require('react-dom/server');
var CollectionControls = require('./CollectionControls.react');
var TweetList = require('./TweetList.react');
var Header = require('./Header.react');


var Collection = React.createClass({
	
	createHtmlMarkupStringofTweetList: function(){
		var htmlString = ReactDOMServer.renderToStaticMarkup(
			<TweetList tweets={this.props.tweets} />
		);

		var htmlMarkup = {
			html: htmlString
		};

		return JSON.stringify(htmlMarkup);
	},

	getListOfTweetIds: function(){
		return Object.keys(this.props.tweets);
	},

	getNumerOfTweetsInCollection: function(){
		return this.getListOfTweetIds().length;
	},

	render: function(){
		var numberOfTweetsInCollection = this.getNumerOfTweetsInCollection();

		if(numberOfTweetsInCollection > 0){
			var tweets = this.props.tweets;
			var htmlMarkup = this.createHtmlMarkupStringofTweetList();
			var removeAllTweetsFromCollection = this.props.onRemoveAllTweetsFromCollection;
			var handleRemoveTweetFromCollection = this.props.onhandleRemoveTweetFromCollection;

			return (
				<div>
					<CollectionControls 
						numberOfTweetsInCollection = {numberOfTweetsInCollection} 
						htmlMarkup = {htmlMarkup} 
						onRemoveAllTweetsFromCollection = {removeAllTweetsFromCollection}
					/>

					<TweetList
						tweets={tweets} 
						onRemoveTweetFromCollection = {handleRemoveTweetFromCollection}
					/>
				</div>
			);
		}

		return <Header text="Your Collection is empty" />;
	}
});


module.exports = Collection;