const BASE_URL = "http://localhost:4000/graphql";
import fetch from "node-fetch";

const testConnection = async () => {
  try {
    const query = `
      query {
        __schema {
          queryType {
            name
          }
        }
      }
    `;

    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
    });

    const data = await response.json();
    console.log("Server Response:", data);
  } catch (error) {
    console.error("Error connecting to GraphQL:", error.message);
  }
};

testConnection();