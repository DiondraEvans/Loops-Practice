for (i = 0; i <= 15; i++){
    console.log(i);
}
console.log (" ");

for(i = 15; i >= 0; i--){
    console.log(i);
}
console.log(" ");

let laps = 0;
for( i = 0; i < 3; i++){
    console.log("that’s another lap!");
    laps += 1;
}
console.log(laps);

console.log(" ");

let age = 18;
 for (i = 0; i <= 100; i++){
    if (i == age){
        console.log ("Wow, you're 18!")
    } else {
        console.log (`${i} age doesnt match`);
    }
 }
console.log("");
for (i = 0; i <= 700; i++){
    if (i % 2 == 0){
        console.log (`${i} is an even number`);
    }
}

console.log("");
for (i = 0; i <= 700; i++){
    if (i % 2 !== 0){
        console.log (`${i} is an odd number`);
    }
}
for (i = 1900; i <= 1949; i++){
    if( i == 1900){
        console.log(`In year ${i} Zepplin was invented`);
    } else if ( i == 1902){
        console.log(`In year ${i} Teddy Bear was invented`);
    } else if ( i == 1910){
        console.log(`In year ${i} Talking Motion Picture was invented`);
    } else if (i == 1913){
        console.log(`In year ${i} Bra was invented`);
    } else if (i == 1918){
        console.log(`In year ${i} Fortune Cookie was invented`);
    } else if (i == 1923){
        console.log(`In year ${i} Traffic Signal was invented`);
    } else if (i == 1935){
        console.log(`In year ${i} Radar was invented`);
    } else if (i == 1938){
        console.log(`In year ${i} Ballpoint Pen was invented`);
    } else if (i == 1943){
        console.log(`In year ${i} Slinky was invented`);
    }
}