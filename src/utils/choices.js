export default function (choices, parser = Number) {
  let got;
  if (Array.isArray(choices)) {
    got = choices;
  } else if (typeof choices === "object") {
    got = Object.keys(choices).map(parser);
  }
  return function (value) {
    return got.includes(value);
  };
}
