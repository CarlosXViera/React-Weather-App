var React = require('react');
var Nav = require('Nav');

var Main = (props) => {
	return (
		<div>
			<Nav></Nav>
			<div className="rom">
				<div className="comlumns large-4 medium-6 small-centered">
					{props.children}
				</div>
			</div>
		</div>
	);
}

module.exports = Main;
