import { getClient } from "./utils";

async function getUser() {
  const client = await getClient();

  const selectUserQuery = `SELECT * FROM users`;
  const userResposne = await client.query(selectUserQuery);

  for (let user of userResposne.rows) {
    console.log(`ID: ${user.id}, Email: ${user.email}`);
  }
}

async function getUserFromEmail(email: string) {
  const client = await getClient();

  const selectUserFromEmailQuery = `SELECT * FROM users WHERE email = $1`;
  let resposne = await client.query(selectUserFromEmailQuery, [email]);

  console.log("Get user using Email: ");

  for (let userEmail of resposne.rows) {
    console.log(`ID: ${userEmail.id}, Email: ${userEmail.email}`);
  }
}

async function getTodoOfUser(id: number) {
    const client = await getClient();

    const getTodoOfUserQuery = `SELECT * FROM todos WHERE user_id = $1`;
    const response = await client.query(getTodoOfUserQuery, [id]);

    console.log("User Todo: ");
    
    for(let todo of response.rows) {
        console.log(todo);
        
    }
}

getUser();
getUserFromEmail("rajan@gmail.com");
getTodoOfUser(1);
