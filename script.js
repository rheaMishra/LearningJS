// const country = "India";
// const continent = "Asia";
// let population = 1380000000;
// const isIsland  = false;
// let language;
// console.log(country+" "+ continent+" "+ population+" "+ isIsland+" "+language);

// language = 'Hindi';
// console.log(continent);
// let halfPopulation = population/2;
// console.log(halfPopulation);
// population+=1;
// console.log(population);
// let populationFinland = 6000000
// let isPopulationHigh = (population>populationFinland);
// console.log(isPopulationHigh);
// let averagePopulation = 33000000;
// let isPopulationLess=(averagePopulation>population);
// console.log(isPopulationLess);

// const description = `${country} is in ${continent}, and its ${population} people speak ${language}`
// console.log(description); 

// if(population>averagePopulation){
//     console.log(`${country}'s population is above average`);
// }else{
//     console.log(`${country}'s population is ${averagePopulation-population} below average`);
// }


//second conding challenge

// const weightMarkInKg = 95;
// const heightMarkInMetre = 1.88;

// const weightJohnInKg = 85;
// const heightJohnInMetre = 1.76;

// const MarkBMI = weightMarkInKg / heightMarkInMetre ** 2;
// const JohnBMI = weightJohnInKg / heightJohnInMetre ** 2;

// const markHigherBMI = (MarkBMI>JohnBMI);
// console.log(markHigherBMI);

// if(MarkBMI>JohnBMI){
//     console.log(`Mark's BMI (${MarkBMI}) is higher than John's BMI (${JohnBMI})!`);
// }else{
//     console.log(`John's BMI (${JohnBMI}) is higher than Mark's BMI (${MarkBMI})!`)
// }


//five falsy values in js : 0, undefined, '', null, NaN
let numNeighbours  = Number(prompt("How many neighbour countries does your country have?"));
if(numNeighbours===1){
    console.log(`only 1 border`);
}else if(numNeighbours>1){
    console.log(`more than 1 border`);
}else{
    console.log(`No borders`);
}
