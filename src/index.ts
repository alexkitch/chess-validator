import { Colour } from "./Colour";
import { Rook } from "./Rook";
import { Location } from "./Location";
import { Queen } from "./Queen";

var piece = new Queen(Colour.White);
var from = new Location("A1");
var to = new Location("B3");

console.log(piece.canMove(from, to));