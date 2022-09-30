import { BasePiece, ValidationSummary } from "./BasePiece";
import { Colour } from "./Colour";
import { Location } from "./Location";

export class Queen extends BasePiece {
    constructor(colour: Colour) {
        super(colour);
    }

    canMove(from: Location, to: Location): ValidationSummary {
        var result = super.canMove(from, to);
        if (!result.canMove) {
            return result;
        }

        const delta = from.calculateDelta(to);
        if (delta.columns === delta.rows) {
            return {
                canMove: true
            }
        }

        if (delta.rows === 0 && delta.columns > 0) {
            return {
                canMove: true
            }
        }

        if (delta.columns === 0 && delta.rows > 0) {
            return {
                canMove: true
            }
        }

        return {
            canMove: false,
            reason: "Queen can only move along the same row, column or diagonally"
        };
    }
}