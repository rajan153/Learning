import { Client } from "pg";

export async function getClient() {
  const client = await new Client(
    "postgres://postgres:postgres@127.0.0.1:5432/postgres"
  );
  await client.connect();
  return client;
}
