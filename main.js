var React     = require('react');
var ReactDOM  = require('react-dom');
var Piece     = require('./Piece');
var Square    = require('./Square');
var Board     = require('./Board');
var observe   = require('./Game').observe;
 

var rootEl   = document.getElementById('app');


observe(function (piecePosition) {
  ReactDOM.render(
    <Board piecePosition={piecePosition} />,
    rootEl
  );
});
