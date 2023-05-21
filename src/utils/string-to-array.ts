export function stringToArray(input: string | string[]) {
  if (typeof input == "string") {
    return [input];
  }
  return input;
}
