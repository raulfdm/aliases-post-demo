const { createUser } = require("models/User");

const user = createUser("John-Doe");

console.log(user);
