
export interface Delta {
    rows: number;
    columns: number;
}

export class Location {
    public row: number;
    public column: number;

    constructor(location: string) {
        this.row = parseInt(location[1]) - 1;
        this.column = location.toUpperCase().charCodeAt(0) - 65;
    }

    public calculateDelta(to: Location): Delta {
        return {
            rows: Math.abs(to.row - this.row),
            columns: Math.abs(to.column - this.column)
        }
    }

    public isValid(): boolean {
        return this.row >= 0 && this.row <= 7 && this.column >= 0 && this.column <= 7;
    }
}