var React = require('react');
var ReactDOM = require('react-dom');
var Application = require('./components/Application.react');

ReactDOM.render(<Application />, document.getElementById('react-application'));

/*var ReactClass = React.createClass({

	getInitialState: function(){
		return{
			isHeaderHidden: false,
			title: "StateFull React Component"
		}
	},

	handleClick: function(){
		this.setState({
			isHeaderHidden: !this.state.isHeaderHidden
		});
	},

	render: function(){

		var headerElement = React.createElement('h1', {className: 'header',key: 'header'}, this.state.title); 
		var buttonElement = React.createElement('button', {className: 'btn btn-default', key:'button', onClick: this.handleClick}, 'Toggle header');

		if(this.state.isHeaderHidden){
			return React.createElement('div', null, [buttonElement]);
		}

		return React.createElement('div', null, [buttonElement, headerElement]);
	}
});
var reactComponentElement = React.createElement(ReactClass);
var reactComponent = ReactDOM.render(reactComponentElement, document.getElementById('react-application'));*/


