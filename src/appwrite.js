import { Client, Account } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("64aff9a7dad1eef19290");

export const account = new Account(Client);
export default client;
