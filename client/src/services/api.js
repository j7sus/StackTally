export const getMockDeliveries = async () => {
    return [
      { id: 1, userName: "Karina", date: "2025-01-08", totalBoxes: 10 },
      { id: 2, userName: "Anthony", date: "2025-01-07", totalBoxes: 15 },
      { id: 3, userName: "Luis", date: "2025-01-06", totalBoxes: 12 },
    ]; 
};


export const getMockBoxes = async () => {
    return [
        { id: 1, boxNumber: "12345", store: "BCN", totalItems: 10, date: "2025-01-08" },
        { id: 2, boxNumber: "67890", store: "MAD", totalItems: 15, date: "2025-01-07" },
        { id: 3, boxNumber: "67897", store: "VLC", totalItems: 11, date: "2025-01-06" },
    ];
};
