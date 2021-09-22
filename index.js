const movies = require("./data/movies");
const connection = require('./config/mongoConnection');

async function main() {
    
    try{
        const billAndTed = await movies.create("Bill and Ted Face the Music","Once told they'd save the universe during a time-traveling adventure, 2 would-be rockers from San Dimas, California find themselves as middle-aged dads still trying to crank out a hit song and fulfill their destiny.","PG-13", "1hr 31min","comedy",["Keanu Reeves","Alex Winter"],{director: "Dean Parisot", yearReleased:2020});
        console.log(billAndTed);
        }
        catch(e){
            console.log(e);
        }
        
    try{
        const theDarkKnight = await movies.create("The Dark Knight","When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        "R", "2hr 32min","Action", ["Christian Bale","Heath Ledger"], {director: "Christopher Nolan", yearReleased: 2008});
    }
    catch(e){
        console.log(e);
    }
    try{
        const getAll = await movies.getAll();
        console.log(getAll);
        }
        catch(e){
        console.log(e);
    }
    try{
        const hiddenFigures = await movies.create("Hidden Figures","The story of a team of female African-American mathematicians who served a vital role in NASA during the early years of the U.S. space program.",
        "PG", "2hr 7min","Drama",["Taraji P. Henson","Octavia Spencer", "Janelle Monáe"],{director: "Theodore Melfi", yearReleased: 2016});
        console.log(hiddenFigures);
    }
    catch(e){
        console.log(e);
    }    
    // try{
    //     const rename = await movies.rename("604677f973bf360deccc9f50", "Renamed First Movie Title");
    //     console.log(rename);
    // }
    // catch(e){
    //     console.log(e);
    // }
    // try{
    //     const remove = await movies.remove("604677f973bf360deccc9f51");
    // }
    // catch(e){
    //     console.log(e);
    // }
    // try{
    //     const getAll = await movies.getAll();
    //     console.log(getAll);
    //     }
    //     catch(e){
    //         console.log(e);
    //     }
    
    //Errors
    try{
        const billAndTed = await movies.create("","When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.","R", "2hr 32min","Action", ["Christian Bale","Heath Ledger"], {director: "Christopher Nolan", yearReleased: 2008});
        console.log(billAndTed);
        }
        catch(e){
            console.log(e);
        }
    try{
        const remove = await movies.remove("604677f973bf360deccc9f53");
        console.log(remove);
    }
    catch(e){
        console.log(e);
    }
    try{
            const rename = await movies.rename("604677f973bf360deccc9f53", "Renamed-title-1");
            console.log(rename);
        }
        catch(e){
            console.log(e);
        }
    try{
        const rename = await movies.rename("", "Renamed-title-2");
        console.log(rename);
    }
    catch(e){
        console.log(e);
    }
    try{
        const get = await movies.get("604677f973bf360deccc9f53");
        console.log(get);
    }
    catch(e){
        console.log(e);
    }
    const db = await connection();
    await db.serverConfig.close();
}
main();
