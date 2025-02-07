import BASE_URL from "./config"

export const getDeliveries = async () => {
    const query = `
      query {
        deliveries {
          id
          userName
          date
          totalBoxes
          boxes {
            id
            numberBox
            items {
              id
              barcode
              style
              description
              size
            }
          }
        }
      }
    `;
    const response = await fetch(`${BASE_URL}/graphql`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
    });
  
    if (!response.ok) {
      throw new Error("Failed fetching deliveries");
    }
    
    const responseData = await response.json();
    console.log("GraphQL Response:", responseData); // Log para depuración

    return responseData.data.deliveries; // Devuelve las entregas
  };
  


export const getBoxes = async (deliveryId) => {
    try {
        
        const response = await fetch(`${BASE_URL}/api/boxes?delivery=${deliveryId}`);
        if (!response.ok) {
            throw new Error("Failed fetching boxes");
        }
        return await response.json();

    } catch (error) {
        console.error("Error fetching boxes:", error.message);
        throw error;
    }
};

export const getItems = async (boxId) => {
    try {
        const query = `
        query GetItems($boxId: ID!) {
            items(boxId: $boxId) {
                id
                barcode
                style
                description
                size
            }
        }
        `;
        const response = await fetch(`${BASE_URL}/graphql`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query, variables: {boxId}}),
        });

        if (!response.ok) {
            throw new Error("Failed to fetch items");
        }
        const { data } = await response.json();
        return data.items;

    } catch (error) {
        console.error("Error fetching items:", error.message);
        throw error;
    }
}

export const syncBoxItems = async (boxId) => {
    try {
        const query = `
            mutation SyncItems($boxId: ID!) {
                assignItemsToBox(boxId: $boxId) {
                    id
                    items {
                        id
                        barcode
                        style
                        color
                        description
                        size
                    }
                }
            }
        `;
        const response = await fetch(`${BASE_URL}/graphql`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query, variables: {boxId}}),
        });

        if (!response.ok) {
            throw new Error("Failed to sync items");
        }
        const { data } = await response.json();
        return data.assignItemsToBox.items;

    } catch (error) {
        console.error("Error syncing items:", error.message);
        throw error;
    }
}