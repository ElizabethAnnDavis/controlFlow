/*
Part 2: Thinking Bigger
The conservation area in which the garden is located has multiple other gardens. 
Using the logic you have already created, determine:
- The amount of additional space that would be required if the scientists were to 
  start with 100 plants, and did not prune them for 10 weeks.
  - If the space remained circular, what would be the radius of this expanded garden?
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

// determine if there is extra space or more space needed
function spcSituation(p, t, a){
    let add = 0;
    let xtra = 0;
    if(pcntCovrd > 100){
        add = rndNum(t - a);
        console.log("You need " + add + "m^2 more space for all these plants");
        return (-1) * add;
    }else{
        xtra = rndNum(a - t);
        console.log("You have " + xtra + "m^2 more space for plants.");
        return xtra;
    };
};

// r = squareroot of a/pi
function findRadius(a, pi){
    let r = rndNum(Math.sqrt(a/pi));
    console.log("You would need a circular garden plot with a radius of " + r + "m to accomidate this many plants.\n")
};


let radius = 5;
const PI = 3.1415; 
const AREA = PI * radius ** 2;
let minPlntSpc = 0.8;
let initPlntNum = 100;
let plantNum = initPlntNum;
let week = 0;
let area = AREA;
let ttlNeededSpc = plantNum * minPlntSpc;
let spcLeftOver = 0;


// week 10
week = 10;
plantNum = prdctPlntGrwth(week, initPlntNum);
ttlNeededSpc = plantNum * minPlntSpc;
pcntCovrd = pcntFull(area, ttlNeededSpc);



spcLeftOver = spcSituation(pcntCovrd, ttlNeededSpc, area);
findRadius(ttlNeededSpc, PI);