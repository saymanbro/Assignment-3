// <<<<By this function you can convert feet to mile>>>>

function feetToMile(feet){
    if(feet > 0){
        let mile = feet *.000189394;
        return mile;
    }
    else{
        console.log("Error: Distanse can't be negative");
    }
}
let result = feetToMile(10000);
console.log("Answer:",result,"mile");





// <<<Useing this function you can understand how much wood need to make chair,table and Bed>>>

function woodCalculator(chair,table,bed){
    let toMakeChair = chair * 1;
    let toMakeTable = table * 3;
    let toMakeBed = bed * 5;
    let totalWoodNeed = toMakeChair + toMakeTable + toMakeBed;
    return totalWoodNeed;
}
let finalywoodWillBeNeeded = woodCalculator(1,1,1);
console.log(`To make chair,table and bed you have to buy`,finalywoodWillBeNeeded,`Qbic wood`);





// <<<By this function you can count how much brick will need to build a floor>>>

function brickCalculator(floor){
    if(floor >= 1 && floor <= 10){
        let brick = floor * 15 * 1000;
        return brick;
    }
    else if(floor => 11 && floor <= 20){
        let brick = (10*15*1000) + ((floor - 10) * 12 * 1000);
        return brick;
    }
    else if(floor >=20){
        let brick = (10*15*1000) + (10*12*1000) + ((floor - 20)* 10 * 1000);
        return brick ;
    }
    else {
        console.log("Pleas put the floor the currectly");
    }
}
let totalBrickNeeded =brickCalculator(20);
console.log(totalBrickNeeded);





// <<<Useing  this function you can find the tiny name from an Array>>>

function tinyFriend(smallName) {
    let shortLength = Infinity;
    let shortestName = "";

    if (smallName.length > 0) {
        for (let i = 0; i < smallName.length; i++) {
            if (typeof smallName[i] === 'string' && smallName[i].length < shortLength) {
                shortestName = smallName[i];
                shortLength = smallName[i].length;
            }
        }
    }

    return shortestName;
}

var output = tinyFriend(["Al-Amin-Sayman","Rohimia-fadin","rakib","rafi","Tom"]);
console.log(output); 