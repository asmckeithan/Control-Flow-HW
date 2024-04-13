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
 

console.log("(X) refelcts the number of weeks being doudbled ")
let x = 2**1
const week1 = x * 20
console.log(week1)
const week2 = week1 * 2;
const week3 = week2 * 2;
console.log(`Week 1:${week1}\nWeek 2:${week2}\nWeek 3:${week3}`)

console.log("========================")
console.log("Calcuate 80% and 50% of capacity")
const Pmax = totalPlants * .8
const Min1 = totalPlants * .5
console.log(`Maximum:${Pmax}`)
console.log(`Minimum:${Min1}`)

// In order to calculate Pruned and Monitored you must first find the percentage of capacity before running control flow 
//Input number of crops here 
console.log("Week 1: ==============================")
if (week1 >= Pmax){
    console.log(`Please Prune Plants`) 
if (week1 > Min1 && week1 < Pmax)
    console.log("Monitor Crops")
}else {
    console.log("Plant more Crops")
}
console.log("Week 2: ==============================")
if (week2 >= Pmax){
    console.log(`Please Prune Plants`) 
if (week2 > Min1 && week2 < Pmax)
    console.log("Monitor Crops")
}else {
    console.log("Plant more Crops")
}
console.log("Week 3: ==============================")

if (week3 >= Pmax){
    console.log(`Please Prune Plants`) 
if (week3 > Min1 && week3 < Pmax)
    console.log("Monitor Crops")
}else {
    console.log("Plant more Crops")
}

console.log("Part 2 :Thinking Bigger ==============================")
let y = 2**10
console.log(y)
let week10 = y*100
console.log(week10)
if (week10 > totalPlants){
    console.log(`Additional Area Need:${((week10 * area)/totalPlants)-totalPlants}sq`)}
// we solve for x by taking looking at it like this totalplants/area = totalplants(Part2)/ x. Criss Cross to solve for x 
console.log("Part 3 : Errors in Judgement ==============================")

 try {
    const addArea = (((week10 * area)/totalPlants)-totalPlants)
    if (addArea > area) {
      throw `The Additional Area needed to plant ${addArea} is greater than ${area}`
    }
    console.log("Continue to Prune, Monitor, and Plant")
  } catch (error) {
    //Practical Example: give the user a pop-up letting them know there was a error 
    console.log(`The catch block is being executed with this error: ${error}`)
  }
  
  console.log("Does this log?")