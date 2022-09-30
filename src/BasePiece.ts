import { Colour } from "./Colour";
import { Location } from "./Location";

export interface ValidationSummary {
    canMove: boolean;
    reason?: string;
}

export interface Piece {
    canMove(from: Location, to: Location): ValidationSummary;
}

export abstract class BasePiece implements Piece {
    constructor(protected colour: Colour) {

    }

    canMove(from: Location, to: Location): ValidationSummary {
        if (!from.isValid() || !to.isValid()) {
            return {
                canMove: false,
                reason: "Invalid location(s) provided"
            }
        }
        
        return {
            canMove: true
        }
    }
}