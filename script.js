const country = "India";
const continent = "Asia";
let population = 1380000000;
const isIsland  = false;
let language;
console.log(country+" "+ continent+" "+ population+" "+ isIsland+" "+language);

language = 'Hindi';
console.log(continent);
let halfPopulation = population/2;
console.log(halfPopulation);
population+=1;
console.log(population);
let populationFinland = 6000000
let isPopulationHigh = (population>populationFinland);
console.log(isPopulationHigh);
let averagePopulation = 33000000;
let isPopulationLess=(averagePopulation>population);
console.log(isPopulationLess);

const description = `${country} is in ${continent}, and its ${population} people speak ${language}`
console.log(description); 

if(population>averagePopulation){
    console.log(`${country}'s population is above average`);
}else{
    console.log(`${country}'s population is ${averagePopulation-population} below average`);
}