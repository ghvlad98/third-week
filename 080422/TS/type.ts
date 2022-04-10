
/*
n funzioni calcolano l'area e il perimetro di n figure geometriche
funzione che ha due parametri area ed enumerazione delle figure geometriche
scrivere tutte le funzioni in type.ts e richiama in file-index.ts
*/

export enum FIGURE {
    SQUARE,
    RECTANGLE,
    TRIANGLE
}

class SimpleMath {
    b: number;
    h: number;
    l: number;
    x: number;
    y: number;
    z: number;

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

    public operation(f: FIGURE): number {
        switch (f) {
            case FIGURE.SQUARE:
                return this.perimeterSquare(this.l), this.areaSquare(this.l);
            case FIGURE.RECTANGLE:
                return this.perimeterRectangle(this.b, this.h), this.areaRectangle(this.b, this.h);
            case FIGURE.TRIANGLE:
                return this.perimeterTriangle(this.x, this.y, this.z), this.areaTriangle(this.b, this.h);
        }
    }
}

export default SimpleMath