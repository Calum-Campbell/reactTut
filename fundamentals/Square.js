var React = require('react');
var PropTypes = React.PropTypes;


var Square = React.createClass({
  propTypes: {
    black : PropTypes.bool
  },

  render: function() {
    var black = this.props.black;
    var fill = black ? 'black' : 'white';
    return <div style={{ backgroundColor: fill }} />;
  }
})

module.exports = Square;
