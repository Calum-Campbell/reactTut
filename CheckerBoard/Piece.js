var React = require('react');
var DragSource = require('react-dnd').DragSource;
var ItemTypes = require('./Constants').ItemTypes;
var PropTypes = React.PropTypes;


var pieceSource = {
  beginDrag: function (props) {
    return {};
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

var Piece = React.createClass({

  propTypes: {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
  },

  render: function() {

    var connectDragSource = this.props.connectDragSource;
    var isDragging = this.props.isDragging;

    return connectDragSource(
       <div style={{
         opacity: isDragging ? 0.5 : 1,
         color: isDragging ? 'red' : 'black',
         fontSize: 80,
         fontWeight: 'bold',
         cursor: 'move'
       }}>
         ♘
       </div>
     );
  }
})


module.exports = DragSource(ItemTypes.PIECE, pieceSource, collect)(Piece);
