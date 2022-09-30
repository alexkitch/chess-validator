import { BasePiece, ValidationSummary } from "./BasePiece";
import { Colour } from "./Colour";
import { Location } from "./Location";

export class Rook extends BasePiece {
    constructor(colour: Colour) {
        super(colour);
    }

    canMove(from: Location, to: Location): ValidationSummary {
        var result = super.canMove(from, to);
        if (!result.canMove) {
            return result;
        }

        if (from.column !== to.column && from.row !== to.row) {
            return {
                canMove: false,
                reason: "Rooks can only move in one direction at a time"
            }
        }

        return {
            canMove: true
        }
    }
}