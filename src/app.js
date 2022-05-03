const yargs = require("yargs");

const { connectionTest, client} = require("./db/connection");
//don't need to put index.js as it save characters and looks for it regardless!
const { addMovie, listMovie, listMovies, updateMovie, deleteMovie } = require ("./utils");

const app = async (yargsObj) => {
    try {
      //creating the collection and saving to constant
      const collection = await connection();
      if (yargsObj.add) {
        //add movie to database with yargs input
        await addMovie(collection, {
          title: yargsObj.title,
          actor: yargsObj.actor,
        });
        console.log(`Successfully added ${yargsObj.title}`);
      } else if (yargsObj.list) {
        //console log the return statement from my list function
        console.log(await listMovies(collection, yargsObj.searchTitle));
      } else if (yargsObj.update) {
        //update movie by using title to search and actor to update
        await updateMovie(
          collection,
          { title: yargsObj.title },
          { actor: yargsObj.actor }
        );
      } else if (yargsObj.delete) {
        //delete movie by finding it with a title from yargs input
        await deleteMovie(collection, { title: yargsObj.title });
      } else {
        console.log("Incorrect command");
      }
      await client.close();
    } catch (error) {
      console.log(error);
      await client.close();
    }
  };
  
  app(yargs.argv);
  
// const app = async (yargsObj) => {
//     const collection = await connectionTest();
//     if (yargsObj.add) {
//         await addMovie(collection, {title: yargsObj.title, actor: yargsObj.actor });
//         console.log("successfully added new document to database(db)")
//     } else if (yargsObj.list){
//         await listMovies(collection)
//     } else if (yargsObj.update){
//         await updateMovie(collection, {title: yargsObj.title, actor: yargsObj.actor });
//         console.log("sucessfully updated document to db")
//     } else if (yargsObj.find){
//         await listMovies(collection)
//     } else if (yargsObj.delete){
//         await deleteMovie(collection, {title: yargsObj.title, actor: yargsObj.actor });
//     } else {
//         console.log("Incorrect Command")
//     }
//     await client.close();
// };

// app(yargs.argv);