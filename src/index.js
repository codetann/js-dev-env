import numeral from "numeral";
import "./styles/index.sass";

const val = numeral(1000).format("$0,0.00");
console.log(`i would pay ${val} for this course!`);
