var React = require('react')
var ReactDOM = require('react-dom');
var Piece = require('./Piece')
var Square = require('./Square')


ReactDOM.render(
  <Square black>
  <Piece />
  </Square>,
   document.getElementById('app')
   );

