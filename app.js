/*
Part 1: Growing Pains
Your task is to create a program that advises a group of 
environmental scientists how to handle the growth and spread 
of a unique plant species under their supervision. 
You must develop a growth control system that will monitor 
and predict the plant growth, making decisions based on the 
available space and potential growth.

Here is the information you have been given:
The area in which the plants are contained is circular, 
with a radius of 5 meters.

The formula for calculating the area of a circle is 
PI multiplied by the radius, squared: 
const PI = 3.1415; 
const area = PI * radius * radius;

Each plant requires a minimum space of 0.8 square meters.
The area is starting with 20 plants.
The plants double in number every week.

Using this information, your objectives are to:
- Predict the plant growth after a specific number of weeks.
- Implement control flow to make decisions on whether the plants should be:
  - Pruned, to stop them from exceeding the capacity of the garden.
    This condition should be met if the plant count after the given number of 
    weeks is greater than 80% of the maximum capacity of the garden.
  - Monitored, if they are growing at an acceptable rate.
    This condition should be met if the plant count is between 50% and 80% of 
    the maximum capacity of the garden after the given number of weeks.
  - Planted, if there is room to plant more plants.
    This condition should be met if the plant count after the given number of 
    weeks is less than 50% of the maximum capacity of the garden.

Within your submission, include the results for 1, 2, and 3 weeks of 
growth as inputs.
*/

// predict plant growth after a specific number of weeks
function prdctPlntGrwth(n, pN){
    console.log("Week " + n + ":")
    for(let i = n; i > 0; i--){
        pN = (pN * 2);
    };
    console.log("The number of plants is " + pN + ".")
    return pN;
};

// determine how much of the garden is full
function pcntFull(a, t){
    let per = rndNum((t/a) * 100);

    if(per > 80){
        console.log("The number of plants is getting to high.\nThey are covering " + per + "% of the avalible space and should be pruned.\n")
    }else if(per >= 50 && per <= 80){
        console.log("The plant are growing at an acceptable rate.\nThey are covering " + per + "% of the avalible space and should be monitored.\n")
    }else{
        console.log("There is room for more plants.\nThey are covering " + per + "% of the avalible space and more should be planted.\n")
    };

    return per;
};

// rounds a decimal to the tenths place
function rndNum(num){
    return Math.round(num * 10) / 10;
};


let radius = 5;
const PI = 3.1415; 
const AREA = PI * radius ** 2;
let minPlntSpc = 0.8;
let initPlntNum = 20;
let plantNum = initPlntNum;
let week = 0;
let area = AREA;
let ttlNeededSpc = plantNum * minPlntSpc;
let pcntCovrd = pcntFull(area, ttlNeededSpc);

console.log("Used space: " + ttlNeededSpc + "m^2\nTotal space: " + rndNum(area) + "m^2\n")
console.log("Precent of the Area Covered: " + pcntCovrd);

try{
    while(pcntCovrd < 100){
        plantNum = prdctPlntGrwth(week, initPlntNum);
        ttlNeededSpc = plantNum * minPlntSpc;
        pcntCovrd = pcntFull(area, ttlNeededSpc);
        week++;
    };
    throw "ERROR"
}catch(err){
    console.log(err);
    console.log("IT'S TOO MANY PLANTS");
};
/*
// starting week, 0
plantNum = prdctPlntGrwth(week, plantNum);
pcntCovrd = pcntFull(area, ttlNeededSpc);


// week 1
week++;
plantNum = prdctPlntGrwth(week, initPlntNum);
ttlNeededSpc = plantNum * minPlntSpc;
pcntCovrd = pcntFull(area, ttlNeededSpc);

// week 2
week++;
plantNum = prdctPlntGrwth(week, initPlntNum);
ttlNeededSpc = plantNum * minPlntSpc;
pcntCovrd = pcntFull(area, ttlNeededSpc);

// week 3
week++;
plantNum = prdctPlntGrwth(week, initPlntNum);
ttlNeededSpc = plantNum * minPlntSpc;
pcntCovrd = pcntFull(area, ttlNeededSpc);

// week 4
week++;
plantNum = prdctPlntGrwth(week, initPlntNum);
ttlNeededSpc = plantNum * minPlntSpc;
pcntCovrd = pcntFull(area, ttlNeededSpc);
*/