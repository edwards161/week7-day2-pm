exports.addMovie = async (collection, moviedb) => {
    try {
        const addEntry = await collection.insertOne(moviedb);
        console.log(addEntry);
    } catch (error) {
        console.log(error)
    }
};

exports.listMovies = async (collection) => {
    try {
        const movieList = await collection.find().toArray();
        console.log(movieList);
    } catch (error) {
        console.log(error)
    }
};

