var React = require('react');
var WeatherMessage = require('WeatherMessage');
var WeatherForm = require('WeatherForm');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
	getInitialState: function() {
		return {isLoading: false}
	},
	handleSearch: function(location) {

		var that = this;

		this.setState({isLoading: true})
		openWeatherMap.getTemp(location).then(function(temp) {
			that.setState({isLoading: false, location: location, temp: temp});

		}, function(err) {
			that.setState({isLoading: false});
			alert(err);
		})
	},
	render: function() {
		var {isLoading, temp, location} = this.state;

		function renderMessage() {
			if (isLoading) {
				return <h3>Fetching Weather...</h3>;
			} else if (temp && location) {
				return <WeatherMessage temp={temp} location={location}></WeatherMessage>;
			}
		};

		return (
			<div>
				<h3>Get Weather</h3>
				<WeatherForm onSearch={this.handleSearch}></WeatherForm>
				{renderMessage()}
			</div>
		);
	}
});

module.exports = Weather;

module.exports = Weather;
