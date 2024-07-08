"use strict";
function students(user1, user2) {
    return user1.age + user2.age;
}
const result = students({ name: "Rajan", age: 23 }, { name: "Navdeep", age: 22 });
console.log(result);
