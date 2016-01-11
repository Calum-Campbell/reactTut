var React    = require('react')
var ReactDOM = require('react-dom');
var Piece    = require('./Piece')
var Square   = require('./Square')
var Board    = require('./Board')


// ReactDOM.render(
//   <Square black>
//   <Piece />
//   </Square>,
//    document.getElementById('app')
//    );

ReactDOM.render(
  <Board piecePosition={[0, 0]} />,
  document.getElementById('app')
  );
