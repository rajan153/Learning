import { getClient } from "./utils";

async function updateTodoData(Done: boolean, id: number) {
    const client = await getClient();

    const updateTodosDataQuery = `UPDATE todos SET done = $1 WHERE user_id = $2`;
    const response = await client.query(updateTodosDataQuery, [Done, id]);

    console.log("Update Todos data: ");

    for(let todo of response.rows) {
        console.log(todo);
    }
    console.log("Update Successfully!");
    
}

updateTodoData(true, 1);