var React = require('react');
var PropTypes = React.PropTypes;
var Piece = require('./Piece');
var Square = require('./Square');

var Board = React.createClass({
  propTypes: {
    piecePosition: PropTypes.arrayOf(
      PropTypes.number.isRequired
      ).isRequired
  },
  renderSquare: function (x, y) {
    var black = (x + y) % 2 === 1;

    var pieceX = this.props.piecePosition[0];
    var pieceY = this.props.piecePosition[1];
    var piece = (x === pieceX && y === pieceY) ?
      <Piece /> :
      null;

    return (
      <Square black={black}>
        {piece}
      </Square>
    );
  },
  render: function () {
    return (
      <div style={{
        width: '100px',
        height: '100px'
      }}>
        {this.renderSquare(0, 0)}
        {this.renderSquare(1, 0)}
        {this.renderSquare(2, 0)}
        {this.renderSquare(3, 0)}
      </div>
    );
  }
})

module.exports = Board;
