const mongoCollections = require("../config/mongoCollections");
const movies = mongoCollections.movies;
let { ObjectId } = require('mongodb');

module.exports = {


 async create(title, plot, rating, runtime, genre, cast, info){
    if (typeof title === "undefined"|| typeof plot === "undefined"|| typeof rating === "undefined"||typeof runtime === "undefined"|| typeof genre === "undefined"||
    typeof cast === "undefined"||typeof info === "undefined") throw 'All fields needs to have valid values';
    if(typeof title !== "string" || typeof plot !== "string" || typeof rating !== "string" || typeof runtime !== "string"
    ||typeof genre !== "string") throw "Please provide a valid input of string type";
    if (!title||!plot||!rating||!runtime||!genre) throw "You must provide atleast one input";
    if (!Array.isArray(cast)) throw'cast is not of a valid type';
    if(!(cast.every((val) => typeof val === "string" || val.length === 0))) throw 'The elements in array are not of string type';
    if(Array.isArray(info) || typeof info !== "object") throw 'Please provide valid inputs of info';
    if(typeof info.director !== "string" || typeof info.director === "undefined" || info.director.toString().length === 0) throw "Please provide a valid value of director";
    if(!(typeof info.yearReleased === "number") || typeof info.yearReleased === "undefined" || !(info.yearReleased.toString().length === 4)) throw "Year released is not of a proper type";
    if (info.yearReleased < 1930 || info.yearReleased > new Date().getFullYear() + 5) throw 'Year released should be greater than 1930 and less than the current year + 5 years';
     const moviesCollection = await movies();
     let newMovie = {
        "title": title,
        "plot": plot,
        "rating": rating,
        "runtime": runtime,
        "genre": genre,
        "cast": cast,
        "info": info
     };
    const insertInfo = await moviesCollection.insertOne(newMovie);
    if (insertInfo.insertedCount === 0) throw 'Could not add movie';

    const newId = insertInfo.insertedId;
    parsedIdString = newId.toString();
    const movie = await this.get(parsedIdString);
    movie._id = movie._id.toString();
    return movie;

},

async getAll(){
    const moviesCollection  = await movies();
    const moviesList = await moviesCollection.find({}).toArray();
    return moviesList;
},

async get(id){
    if (typeof id === "undefined") throw 'You must provide an id to search for';
    if(typeof id !== "string" || id.length === 0) throw 'Please provide a valid id';
    let parsedId = ObjectId(id);
    const moviesCollection = await movies();
    const movie = await moviesCollection.findOne({ _id: parsedId });
    if(!movie) throw "No movie exists with that id";
    return movie;
},
async remove(id){
    if (typeof id === "undefined") throw 'You must provide an id to remove';
    if(typeof id !== "string" || id.length === 0) throw 'Please provide a valid id';
    let parsedId = ObjectId(id);
    const moviesCollection = await movies();
    const movie = await moviesCollection.findOne({ _id: parsedId });
    if(!movie){
        throw `Could not delete movie with id of ${parsedId} as no movie exists with that id`
    }
    const returnString = `${movie.title} has been successfully deleted.`
    const deletionInfo = await moviesCollection.deleteOne({ _id: parsedId });
    if (deletionInfo.deletedCount === 0) {
      throw `Could not delete movie with id of ${parsedId}`;
    }
    return returnString;
}, 
async rename(id, newTitle){
    if (typeof id === "undefined") throw 'You must provide an id to search for';
    if(typeof id !== "string" || id.length === 0) throw 'Please provide a valid id';
    let parsedId = ObjectId(id);
    if (typeof newTitle === "undefined") throw 'You must provide a new title to replace';
    if(typeof newTitle !== "string" || newTitle.length === 0) throw'Please provide a valid new title';

    const moviesCollection = await movies();
    const updatedTitle = {
      title: newTitle
    };

    const updatedInfo = await moviesCollection.updateOne(
      { _id: parsedId },
      { $set: updatedTitle }
    );
    
    if (updatedInfo.modifiedCount === 0) {
      throw 'Could not rename movie';
    }
    let parsedIdToString = parsedId.toString()
    return await this.get(parsedIdToString);

}
};