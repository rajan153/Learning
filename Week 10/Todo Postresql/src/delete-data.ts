import { getClient } from "./utils";

async function deleteDataFromTable(id: number) {
    const client = await getClient();

    const deleteDataQuery = `DELETE FROM todos WHERE id = $1`;
    await client.query(deleteDataQuery, [id]);

    console.log("Data deleted successfully!");

}

deleteDataFromTable(1);