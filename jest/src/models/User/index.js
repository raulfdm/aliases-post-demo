const { sanitizeStr } = require("helpers/text");

function createUser(name) {
  return {
    name: sanitizeStr(name),
  };
}

module.exports = {
  createUser,
};
