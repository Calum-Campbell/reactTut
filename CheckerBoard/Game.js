var piecePosition = [0, 2];
var observer = null;

function emitChange() {
  console.log(piecePosition)
  observer(piecePosition);
}

exports.observe = function (o) {
  if (observer) {
    throw new Error('Multiple observers not implemented.');
  }

  observer = o;
  emitChange();
}

exports.canMovePiece = function (toX, toY){
  const x = piecePosition[0];
  const y = piecePosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
         (Math.abs(dx) === 1 && Math.abs(dy) === 2);
}

exports.movePiece = function (toX, toY) {
  piecePosition = [toX, toY];
  emitChange();
}
