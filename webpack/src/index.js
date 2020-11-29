import { createUser } from "models/User";

const user = createUser("John-Doe");

document.querySelector("#content").textContent = JSON.stringify(user);
console.log(user);
