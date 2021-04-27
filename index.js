const wakeDog = function(dogName, dogBreed) {
    const string = `Wake ${dogName} the ${dogBreed}`;
    console.log(string);
    return string
}

const leashDog = function (dogName, dogBreed) {
    const string = `Leash ${dogName} the ${dogBreed}`;
    console.log(string);
    return string
}

const walkToPark = function (dogName, dogBreed) {
    const string = `Walk to the park with ${dogName} the ${dogBreed}`;
    console.log(string);
    return string
}
const throwFrisbee = function (dogName, dogBreed) {
    const string = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    console.log(string);
    return string
}

const walkHome = function (dogName, dogBreed) {
    const string = `Walk home with ${dogName} the ${dogBreed}`;
    console.log(string);
    return string
}

const unleashDog = function (dogName, dogBreed) {
    const string = `Unleash ${dogName} the ${dogBreed}`;
    console.log(string);
    return string
}

let routine = [wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog]

function exerciseDog(dogName,dogBreed) {
    return routine.map(fn => fn(dogName, dogBreed))
}