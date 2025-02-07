const BASE_URL = "http://localhost:4000/graphql";

import fetch from "node-fetch";

const deliveries = [
  {
    userName: "Ruud",
    date: new Date().toISOString(),
    boxes: [
      {
        numberBox: "7028051",
        items: [
          { barcode: "805505524", description: "AIRSPEED", size: 42 },
          { barcode: "805505525", description: "AIRSPEED", size: 43 },
        ],
      },
      {
        numberBox: "7028052",
        items: [
          { barcode: "805138565", description: "OVAL", size: 95 },
          { barcode: "805899289", description: "OVAL", size: 80 },
        ],
      },
    ],
  },
  {
    userName: "Marcello",
    date: new Date().toISOString(),
    boxes: [
      {
        numberBox: "7028053",
        items: [
          {
            barcode: "805138528",
            style: "Y02801",
            color: "H8991",
            description: "MAYEMI",
            size: 46,
          },
          {
            barcode: "805505527",
            style: "Y02985",
            color: "T9002",
            description: "VENUS",
            size: 41,
          },
          {
            barcode: "805899251",
            style: "Y03336",
            color: "T8013",
            description: "LEROJI",
            size: 41,
          },
          {
            barcode: "805505523",
            style: "Y03407",
            color: "T1001",
            description: "UKIYO",
            size: 43,
          },
        ],
      },
      {
        numberBox: "7028054",
        items: [
          {
            barcode: "805138565",
            style: "X08726",
            color: "H6528",
            description: "OVAL",
            size: 100,
          },
          {
            barcode: "805899289",
            style: "X10133",
            color: "T8013",
            description: "OVAL",
            size: 80,
          },
          {
            barcode: "805899289",
            style: "X10133",
            color: "T8013",
            description: "OVAL",
            size: 85,
          },
        ],
      },
    ],
  },
  {
    userName: "Gerard",
    date: new Date().toISOString(),
    boxes: [
      {
        numberBox: "7028055",
        items: [
          {
            barcode: "805138528",
            style: "Y02801",
            color: "H8991",
            description: "MAYEMI",
            size: 46,
          },
          {
            barcode: "805505527",
            style: "Y02985",
            color: "T9002",
            description: "VENUS",
            size: 41,
          },
          {
            barcode: "805899251",
            style: "Y03336",
            color: "T8013",
            description: "LEROJI",
            size: 41,
          },
          {
            barcode: "805505523",
            style: "Y03407",
            color: "T1001",
            description: "UKIYO",
            size: 43,
          },
          {
            barcode: "805505524",
            style: "Y03436",
            color: "HA403",
            description: "AIRSPEED",
            size: 42,
          },
          {
            barcode: "805505524",
            style: "Y03436",
            color: "HA403",
            description: "AIRSPEED",
            size: 43,
          },
        ],
      },
    ],
  },
];

const seedData = async () => {
  for (const delivery of deliveries) {
    try {
      // Crear entrega
      const deliveryResponse = await fetch(`${BASE_URL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: `
                      mutation AddDelivery($userName: String!, $date: String!, $totalBoxes: Int!) {
                        addDelivery(userName: $userName, date: $date, totalBoxes: $totalBoxes) {
                          id
                        }
                      }
                    `,
          variables: {
            userName: delivery.userName,
            date: delivery.date,
            totalBoxes: delivery.boxes.length,
          },
        }),
      });

      const { data } = await deliveryResponse.json();
      const deliveryId = data.addDelivery.id;

      // Crear cajas e ítems y actualizar entrega
      const boxIds = [];
      for (const box of delivery.boxes) {
        const boxResponse = await fetch(`${BASE_URL}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            query: `
                          mutation 
                          AddBox(
                          $numberBox: String!, 
                          $store: String!, 
                          $deliveryId: ID!) {
                            addBox(
                            numberBox: $numberBox, 
                            store: $store, 
                            deliveryId: $deliveryId) {
                              id
                            }
                          }
                        `,
            variables: {
              numberBox: box.numberBox,
              store: delivery.userName,
              deliveryId,
            },
          }),
        });

        const { data: boxData } = await boxResponse.json();
        const boxId = boxData.addBox.id;
        boxIds.push(boxId);

        // Crear ítems para cada caja
        for (const item of box.items) {
          await fetch(`${BASE_URL}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              query: `
                              mutation AssignItemToBoxes($barcode: String!, $boxIds: [ID!]!) {
                                assignItemToBoxes(barcode: $barcode, boxIds: $boxIds) {
                                  id
                                }
                              }
                            `,
              variables: {
                barcode: item.barcode,
                boxIds: [boxId],
              },
            }),
          });
        }
      }

      // Actualizar entrega con las referencias a las cajas
      await fetch(`${BASE_URL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: `
                      mutation UpdateDelivery($id: ID!, $boxes: [ID!]!) {
                        updateDelivery(id: $id, boxes: $boxes) {
                          id
                          boxes {
                            id
                          }
                        }
                      }
                    `,
          variables: {
            id: deliveryId,
            boxes: boxIds,
          },
        }),
      });

      console.log(`Delivery ${delivery.userName} | 🔄 Synced Successfully.`);
    } catch (error) {
      console.error(
        `Error syncing delivery ${delivery.userName}:`,
        error.message
      );
    }
  }
};

seedData();
