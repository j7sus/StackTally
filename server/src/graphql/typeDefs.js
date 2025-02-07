import { gql } from "apollo-server-express";

const types = gql`
  # Represents a delivery, which includes user information and associated boxes
  type Delivery {
    id: ID!
    userName: String!
    date: String!
    totalBoxes: Int!
    boxes: [Box]
  }
  # Represents a box, which is linked to a delivery and can contain items
  type Box {
    id: ID!
    numberBox: String!
    store: String!
    totalItems: Int!
    delivery: Delivery
    items: [Item]
  }
  # Represents an individual item that can belong to multiple boxes
  type Item {
    id: ID!
    barcode: String!
    style: String
    description: String
    size: String
    boxes: [Box]
  }
  # Root query type for fetching deliveries, boxes, and items
  type Query {
    deliveries: [Delivery]
    boxes(deliveryId: ID!): [Box]
    items(boxId: ID!): [Item]
  }

  # Root mutation type for adding deliveries, boxes, and assigning items
  type Mutation {
    addDelivery(userName: String!, date: String!, totalBoxes: Int!): Delivery
    addBox(numberBox: String!, store: String!, deliveryId: ID!): Box
    assignItemsToBox(barcode: String!, boxIds: [ID!]!): Item
  }
`;

export default types;
