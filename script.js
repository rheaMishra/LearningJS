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
// let numNeighbours  = Number(prompt("How many neighbour countries does your country have?"));
// if(numNeighbours===1){
//     console.log(`only 1 border`);
// }else if(numNeighbours>1){
//     console.log(`more than 1 border`);
// }else{
//     console.log(`No borders`);
// }

//logical operators
// let isLanguageEnglish = true;
// let isPopulationLessThan50Million = true;
// let isNotIsland = true;
// if(isLanguageEnglish && isPopulationLessThan50Million && isNotIsland){
//     console.log(`sarah should live in India`);
// }else{
//     console.log(`India does not meet your criteria`);
// }





//3rd coding challenge
// let minimumScore = 100;
// // let dolphinsAverageScore = (97+112+101)/3;
// let dolphinsAverageScore = (96+108+89)/3;

// let koalasAverageScore = (96+108+89)/3;
// // let koalasAverageScore = (109+95+123)/3;
// console.log(`Dolphins Score = ${dolphinsAverageScore}
// Koalas Score = ${koalasAverageScore}`)
// if(dolphinsAverageScore > koalasAverageScore && dolphinsAverageScore >= minimumScore){
//     console.log(`Dolphins are winner `);
// }else if (koalasAverageScore > dolphinsAverageScore && koalasAverageScore >=minimumScore ){
//     console.log(`Koalas are winner`);
// }else{
//     if(dolphinsAverageScore === koalasAverageScore  && dolphinsAverageScore >= minimumScore && koalasAverageScore >= min){
//     console.log(`Both win the trophy`);
//     }else{
//         console.log(`No one wins the trophy`);
//     }
// }

//switch statement

// let day = '';
// switch(day){
// case 'Monday':
// console.log('It is monday')
// break;
// case 'Tuesday':
// console.log('It is tuesday')
// break;
// case 'Wednesday':
// console.log('It is wednesday')
// break;
// case 'Thursday':
// console.log('It is thursday');
// break;
// case 'Friday':
// case 'Saturday':
// console.log('It is either friday or saturday');
// break;
// case 'Sunday':
// console.log('It is sunday');
// default:
//     console.log('Invalid');
// }
// let day = 'Monday';
// if(day === 'Monday'){
//     console.log('It is monday')
// }else if(day === 'Tuesday'){
//     console.log('It is tuesday')
// }else if(day === 'Wednesday'){
//     console.log('It is wednesday')
// }else if(day === 'Thursday'){
//     console.log('It is thursday');
// }else if(day === 'Friday'||day ==='Saturday'){
//     console.log('It is either friday or saturday');
// }else if(day === 'Sunday'){
//     console.log('It is sunday');
// }else{
//     console.log('Invalid');
// }


// let language = 'cinese';
// switch(language){
//     case 'chinese':
//     case 'mandarian':
//         console.log('MOST number of native speakers!');
//         break;
//     case 'spanish':
//         console.log('2nd place in number of native speakers');
//         break;
//     case 'english':
//         console.log('3rd place');
//         break;
//     case 'hindi':
//         console.log('Number 4');
//         break;
//     case 'arabic':
//         console.log('5th most spoken language');
//         break;
//     default:
//         console.log('Great language too :D');
// }


//Ternary operator
// let population = 320000000;
// population>330000000?console.log(`Portugal's population is above average`):console.log(`Portugal's population is below average`);



//Coding challenge $4
// let billValue = 40;

// if(billValue >=50 && billValue<=300){
//     let tip = (15/100)*billValue;
//     let finalValue = tip+billValue;
//     console.log(`The bill was ${billValue}, the tip was ${tip}, and the total value ${finalValue}`);
// }else{
//     let tip = (15/100)*billValue;
//     let finalValue = tip+billValue;
//     console.log(`The bill was ${billValue}, the tip was ${tip}, and the total value ${finalValue}`);
// }
const billValue = 275;
const tip = billValue >=50 && billValue<=300 ?  billValue*0.15 : billValue*0.2;
console.log(`The bill was ${billValue}, the tip was ${tip}, and the total value ${billValue+tip}`);