interface User {
    name: string,
    age: number,
    email?: string,
}

function students(user1:User, user2:User) {
    return user1.age + user2.age
}

const result = students({name:"Rajan", age:23},{name:"Navdeep", age:22})
console.log(result);
