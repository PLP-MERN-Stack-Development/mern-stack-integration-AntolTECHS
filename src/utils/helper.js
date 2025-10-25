export const truncate = (text, length = 100) =>
  text.length > length ? text.slice(0, length) + "..." : text;
