import sumValues from "./sum.js";

export function sumOdd(values) {
  return sumValues(values.filter((item, index) => index % 2 === 0));
}
