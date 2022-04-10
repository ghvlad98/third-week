import { SimpleMath } from './type2'
import { RegularFigure } from './type2';
import { FIGURE } from './type2'

let m = new SimpleMath();
let f = new RegularFigure();
console.log(m.operation(f, FIGURE.SQUARE));
console.log(m.operation(f, FIGURE.RECTANGLE));
console.log(m.operation(f, FIGURE.TRIANGLE));