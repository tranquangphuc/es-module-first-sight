import sumValues from "./sum.mjs";

export function sumOdd(values) {
  return sumValues(values.filter((item, index) => index % 2 === 0));
}
