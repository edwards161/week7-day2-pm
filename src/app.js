const yargs = require("yargs");

const { connectionTest, client} = require("./db/connection");
//don't need to put index.js as it save characters and looks for it regardless!
const { addMovie, listMovie, listMovies } = require ("./utils");

const app = async (yargsObj) => {
    const collection = await connectionTest();
    if (yargsObj.add) {
        await addMovie(collection, {title: yargsObj.title, actor: yargsObj.actor });
        console.log("successfully added new document to database(db)")
    } else if (yargsObj.list){
        await listMovies(collection)
    } else {
        console.log("Incorrect Command")
    }
    await client.close();
};

app(yargs.argv);