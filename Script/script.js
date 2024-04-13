console.log(`Growth Control System` )


const PI = 3.1415;
let radius = 5;
const area = PI * radius * radius;
console.log(`calcualtion of filled garden `)
console.log(area) //2.0156 is the area between each plant

console.log(`=========================`)
console.log(`Total plants that meet garden capcity `)
const totalPlants = area/.8
console.log(totalPlants )
 



let plants = 20;
let week = "1";
switch (week) {
   case "1":
       console.log(`Week 1:${plants * 2}`);
       break;
   case "2":
       console.log(`Week 2:${plants * 4}`);
       break;
   case "3":
       console.log(`Week 3:${plants * 8}`);
       break
   default:
       console.log("No Crops Produced this week")
       break;
}