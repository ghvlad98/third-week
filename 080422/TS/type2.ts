export enum FIGURE {
    SQUARE,
    RECTANGLE,
    TRIANGLE
}

interface operations<T> {
    operation(T: Object, f: FIGURE);
}

export class SimpleMath implements operations<RegularFigure> {
    private areaTriangle(b: number, h: number): number {
        return (b * h) / 2;
    }

    private areaSquare(l: number): number {
        return l * l;
    }

    private areaRectangle(b: number, h: number): number {
        return b * h;
    }

    private perimeterTriangle(x: number, y: number, z: number): number {
        return x + y + z;
    }

    private perimeterRectangle(b: number, h: number): number {
        return (b + h) * 2;
    }

    private perimeterSquare(l: number): number {
        return l * l;
    }

    public operation(o: RegularFigure, f: FIGURE): number {
        switch (f) {
            case FIGURE.SQUARE:
                return this.perimeterSquare(o.side), this.areaSquare(o.side);
            case FIGURE.RECTANGLE:
                return this.perimeterRectangle(o.base, o.height), this.areaRectangle(o.base, o.height);
            case FIGURE.TRIANGLE:
                return this.perimeterTriangle(o.x, o.y, o.z), this.areaTriangle(o.base, o.height);
        }
    }
}

interface Figure<T> {
    side: T;
    base: T;
    height: T;
    x: T;
    y: T;
    z: T;
}

export class RegularFigure implements Figure<number> {
    side: number;
    base: number;
    height: number;
    x: number;
    y: number;
    z: number;
}