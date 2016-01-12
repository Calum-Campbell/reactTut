
// exports.observe = function (receive) {
//   setInterval(function () {
//     receive([
//       Math.floor(Math.random() * 8),
//       Math.floor(Math.random() * 8)
//     ]);
//   }, 500);
// };

var piecePosition = [0, 0];
var observer = null;

function emitChange() {
  observer(piecePosition);
}

exports.observe = function (o) {
  if (observer) {
    throw new Error('Multiple observers not implemented.');
  }

  observer = o;
  emitChange();
}

exports.movePiece = function (toX, toY) {
  piecePosition = [toX, toY];
  emitChange();
}
