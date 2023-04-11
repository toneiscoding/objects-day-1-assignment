// Copy this object with it’s nested object

let movie = {

    name: "Titanic",

    releaseYear: 1997,

    director: "James Cameron",

    actors: ["Leonardo Dicaprio", "Kate Winslet", "Billy Zane", "Kathy Bates"],

    starActor: {

        name: "Leonardo Dicaprio",

        age: 5,

        born: 1889,

        linkToAwards: "https://en.wikipedia.org/wiki/List_of_awards_and_nominations_received_by_Leonardo_DiCaprio",

        headshotLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Leonardo_DiCaprio_2014.jpg/220px-Leonardo_DiCaprio_2014.jpg"

    },

    budgetInMillions: 200

}

 

// Try to make functions that do the following: 

 

// Access the star actor’s age property  and change the value to 48.
let updateStarActorAge=(movie, newAge)=> {
    movie.starActor.age = newAge;
}

updateStarActorAge(movie, 48)

// Access the star actor’s born property and change the value to 1989.
let updateStarActorBorn=(movie, newBorn) => {
    movie.starActor.born = newBorn
}
updateStarActorBorn(movie, 1989)
// Add a new property to the starActor object called isPopular and set its value to true.

movie.starActor.isPopular = true;

let addIsPopularProptery=(movie) => {
    movie.starActor.isPopular = true;
}
addIsPopularProptery(movie);

// Add a new property to the movie object called isGoodMovie with a value of undefined.

movie.isGoodMovie = undefined;

let addIsGoodMovieProperty=(movie)=> {
    movie.isGoodMovie = undefined
}
addIsGoodMovieProperty(movie);

// Access the actors array, loop through it and check if the movie has “Tom Cruise” in it. If true, set isGoodMovie to true, else set isGoodMovie to false.

let hasTomCruise = movie.actors.includes["Tom Cruise"];
 
 if (hasTomCruise) {
    movie.isGoodMovie = true
 } else { 
    movie.isGoodMovie = false
}
console.log(movie)