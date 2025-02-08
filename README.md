<div align="center">
  <img src="./client/src/assets/Icons/StackTally logo.svg" width="150" alt="StackTally logo">
  <h1> StackTally </h1>

  <h3><i>"Smart management for stacked items,<br/> find it fast, count it smarter."</i></h3>


[![Node.js](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)](https://expressjs.com/)
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://reactjs.org/)
[![Context API](https://img.shields.io/badge/contextapi-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://reactjs.org/docs/context.html)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

</div>


## Prerequisites

- [Node.js (v18.0.0 or higher)](https://nodejs.org/en/download/)
- [npm (v9.0.0 or higher)](https://nodejs.org/en/download/)
- [MongoDB (v6.0 or higher)](https://www.mongodb.com/try/download/community)

## Installation

#### 1. **Clone the repository**

   ```bash
   git clone https://github.com/j7sus/StackTally.git
   cd stack-tally
   ```
#### 2. **Install dependencies**

   ```bash
   npm install
   ```

#### 3. **Configure environment variables**

  * Create a .env file in the root directory
  * Copy the contents of .env.example (provided in the repository) into .env
  * Set MONGO_URI and other required credentials
  * Open the .env file and set the MONGO_URI and any other required credentials.

#### 4. **Start the development server and client**

   ```bash
   npm run dev
   ```
  Once both the frontend and the backend are running open [localhost:5173](http://localhost:5173) in your browser. Have fun!

## Useful Scripts
* `npm run install-all` → Install dependencies for both client and server
* `npm run dev` → Start both client and server in development mode
* `npm run start` → Start the server in production mode
* `npm run seed` → Populate the database with test data
* `npm test` → Run unit tests

## Built With
<div align="center">
<div style="display: flex; gap: 20px; justify-content: space-around; padding: 40px">
  <img src="./client/src/assets/StackTally%20demo-gif/StackTallydemo-gif-1-.gif" width="120">
  <img src="./client/src/assets/StackTally%20demo-gif/StackTallydemo-gif-2-.gif" width="120">
  <img src="./client/src/assets/StackTally%20demo-gif/StackTallydemo-gif-3-.gif" width="120">
</div>
</div>

*   **Frontend:**
    *   [React](https://reactjs.org/) - Used for building the dynamic user interface and managing components.
    *   [CSS Modules](https://github.com/css-modules/css-modules) - Employed for styling components in a modular and maintainable way, preventing CSS conflicts.
    *   [GraphQL](https://graphql.org/) - Used for querying and fetching data from the backend API efficiently.
    *   [Figma](https://www.figma.com/) - Used for designing the user interface and creating prototypes for the StackTally application.

*   **Backend:**
    *   [Node.js](https://nodejs.org/) - The runtime environment for the server-side logic and API.
    *   [Express.js](https://expressjs.com/) - The web framework used to create the REST API endpoints and handle requests.
    *   [MongoDB](https://www.mongodb.com/) - The database used to store the application's data persistently.
    *   [Mongoose](https://mongoosejs.com/) - Provides a structured way to interact with MongoDB, defining models and schemas.
    *   [Apollo Server](https://www.apollographql.com/docs/apollo-server/) - The GraphQL server implementation, handling GraphQL queries and mutations.


*   **Other:**
    *   [npm](https://www.npmjs.com/) - Used for managing project dependencies and running scripts.
    *   [Git](https://git-scm.com/) - Used for version control and collaboration.
    *   Love, lots of love 🩶++;

## REST API
   * Deliveries:

     * GET /api/deliveries → Get all deliveries
     * POST /api/deliveries → Create a delivery
   * Boxes:

     * GET /api/boxes/:numberBox/items → Get items in a box
     * POST /api/boxes → Create a new box
##
:) <div align="center">
  ![License: MIT](https://img.shields.io/badge/License-MIT-blueviolet.svg)
</div>

 
