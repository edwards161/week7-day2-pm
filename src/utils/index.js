exports.addMovie = async (collection, movieObj) => {
    try {
      await collection.insertOne(movieObj);
    } catch (error) {
      throw new Error(error);
    }
  };
  
  exports.listMovies = async (collection, search) => {
    try {
      if (search) {
        return await collection.find({ title: search }).toArray();
      } else {
        return await collection.find({}).toArray();
      }
    } catch (error) {
      throw new Error(error);
    }
  };
  
  exports.updateMovie = async (collection, filterObj, updateObj) => {
    try {
      const updateCheck = await collection.updateOne(filterObj, {
        $set: updateObj,
      });
      if (updateCheck.modifiedCount > 0) {
        console.log("Successfully updated");
      } else {
        console.log("No movie found");
      }
    } catch (error) {
      throw new Error(error);
    }
  };
  
  exports.deleteMovie = async (collection, filterObj) => {
    try {
      const deleteCheck = await collection.deleteOne(filterObj);
      if (deleteCheck.deletedCount > 0) {
        console.log("Successfully deleted");
      } else {
        console.log("No movie found");
      }
    } catch (error) {
      throw new Error(error);
    }
  };
  
// exports.addMovie = async (collection, movieObj) => {
//     try {
//         const addEntry = await collection.insertOne(movieObj);
//         console.log(addEntry);
//     } catch (error) {
//         console.log(error)
//     }
// };

// exports.listMovies = async (collection, filterObj, updateObj) => {
//     try {
//         const movieList = await collection.find({ title: search }).toArray();
//         console.log(movieList);
//     } catch (error) {
//         console.log(error)
//     }
// };

// exports.updateMovie = async (collection, moviedb) => {
//     try {
//         const updateEntry = await collection.updateOne(moviedb, filter, update);
//         console.log(updateEntry)
//     } catch (error) {
//         console.log(error)
//     }
// }

// exports.deleteMovie = async (collection, movieObj) => {
//     try {
//         const deleteEntry = await collection.deleteOne(movieObj)
//         console.log(deleteEntry)
//     } catch (error) {
//         console.log(error)
//     }
// }

