var React     = require('React');
var PropTypes = React.PropTypes;
var Square    = require('Square');

var BoardSquare = React.createClass({
  PropTypes: {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  },

  render: function() {
    var x = this.props.x;
    var y = this.props.y;
    var black = (x + y) % 2 === 1;

    return (
      <Square black={black}>
      {this.props.children}
      </Square>
      );
  }
})
 module.exports = BoardSquare;