function sanitizeStr(str) {
  return str.trim().replace("-", "");
}

module.exports = {
  sanitizeStr,
};
