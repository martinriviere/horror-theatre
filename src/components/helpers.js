export const getValueFromString = (string, unitLength) =>
  parseFloat(string.slice(0, string.length - unitLength));
