import BASE_URL from "./config"

export const getDeliveries = async () => {
    try {
        
        const response = await fetch(`${BASE_URL}/api/deliveries`);
        if (!response.ok) {
            throw new Error("Failed to fetch deliveries");
        }
        return await response.json();

    } catch (error) {
        console.error("Error fetching deliveries", error.message);
        throw error;
    }
};


export const getBoxes = async (deliveryId) => {
    try {
        
        const response = await fetch(`${BASE_URL}/api/boxes?delivery=${deliveryId}`);
        if (!response.ok) {
            throw new Error("Failed to fetch boxes");
        }
        return await response.json();

    } catch (error) {
        console.error("Error fetching boxes:", error.message);
        throw error;
    }
};

