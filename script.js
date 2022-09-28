//First Coding Challenge(udemy)
const weightMarkInKg = 95;
const heightMarkInMetre = 1.88;

const weightJohnInKg = 85;
const heightJohnInMetre = 1.76;

const MarkBMI = weightMarkInKg / heightMarkInMetre ** 2;
const JohnBMI = weightJohnInKg / heightJohnInMetre ** 2;

const markHigherBMI = (MarkBMI>JohnBMI);
console.log(markHigherBMI);
