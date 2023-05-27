const express = require("express");
const cors = require("cors");
const colors = require("colors");
require("dotenv").config();
const { graphqlHTTP } = require("express-graphql");
const port = process.env.PORT || 5000;
const schema = require("./schema/schema");
const connectDB = require("./config/db");
const app = express();

app.use(cors());

// connect to database
connectDB();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
