import { getClient } from "./utils";

async function createEntries() {
  const client = await getClient();

  const insertUserQuery = `INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id`;
  const userValues = ["rajan@gmail.com", "rajan15"];

  let response = await client.query(insertUserQuery, userValues);
  const insertTodoText = `INSERT INTO todos (title, description, user_id, done) VALUES ($1, $2, $3, $4) RETURNING id`;
  const todoValues = [
    "First Time SQL",
    "Hey, I am learning SQL",
    response.rows[0].id,
    false,
  ];

  await client.query(insertTodoText, todoValues);

  console.log("Data inserted successfully");
}

createEntries();
