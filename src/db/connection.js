require("dotenv").config();

const { MongoClient } = require("mongodb");

//New instance of Mongo Client
const client = new MongoClient(process.env.MONGO_URI);

const connectionTest = async () => {
    try {
        await client.connect();
        console.log("connection successful")
        const db = client.db("Movies");
        return db.collection("Movie");
    } catch (error) {
        console.log(error)
    }
};

// connectionTest();

module.exports = { connectionTest, client}