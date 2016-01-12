var React = require('react');
var PropTypes = React.PropTypes;
var Piece = require('./Piece');
var Square = require('./Square');
var movePiece = require('./Game').movePiece;
var canMovePiece = require('./Game').canMovePiece;

var DragDropContext = require('react-dnd').DragDropContext;
var HTML5Backend = require('react-dnd-html5-backend');




var Board = React.createClass({
  propTypes: {
    piecePosition: PropTypes.arrayOf(
      PropTypes.number.isRequired
      ).isRequired
  },

  renderSquare: function (i) {
    var x = i % 8;
    // console.log(x)
    var y = Math.floor(i / 8);

    var black = (x + y) % 2 === 1;

    var pieceX = this.props.piecePosition[0];
    var pieceY = this.props.piecePosition[1];
    var piece = (x === pieceX && y === pieceY) ?
    <Piece /> :
    null;

    return (
      <div key={i}
      style={{ width: '12.5%', height: '12.5%' }}
      onClick={this.handleSquareClick.bind(this, x, y)}>
      <Square black={black}>
      {piece}
      </Square>
      </div>
      );
  },

  handleSquareClick: function (toX, toY) {
    if (canMovePiece(toX,toY)){
      movePiece(toX, toY);
    }else {
      console.log("not legal move!")
    }
  },

  render: function () {
    var squares =[];
    for (let i = 0; i < 64; i++) {
      squares.push(this.renderSquare(i));
    }

    return (
      <div style={{
        width: '100%',
        height: '1000px',
        display: 'flex',
        flexWrap: 'wrap'
      }}>
      {squares}
      </div>
      );
  }
})

module.exports = Board;
module.exports = DragDropContext(HTML5Backend)(Board);

