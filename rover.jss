// const finishedBoard = []
// for (let y = 0; y < 10; y++) {
//  const currentCords = []
//   for (let x = 0; x < 10; x++) {
//     currentCords.push({
//       x: x,
//       y:y
//     })
//   }
//   finishedBoard.push(currentCords)
// }
// console.log(finishedBoard)
const rover = {
  direction: "E", 
  position: {
    x:5,
    y:5,
  },
travelLog: [],
}
// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
  if (rover.direction === "N") {
    rover.direction = "W"
  } else if (rover.direction === "W") {
    rover.direction = "S"
  } else if (rover.direction === "S") {
    rover.direction ="E"
  } else if (rover.direction === "E") {
    rover.direction = "N"
  } 
  console.log(rover.direction)
}
function turnRight(rover){
  console.log("turnRight was called!");  
  if (rover.direction === "N") {
    rover.direction = "E"
  } else if (rover.direction === "E") {
    rover.direction = "S"
  } else if (rover.direction === "S") {
    rover.direction ="W"
  } else if (rover.direction === "W") {
    rover.direction = "N"
  }
  console.log(rover.direction)
}
function moveForward(rover){
  if (!isAbleToMove(rover.direction, 'f')) {
return console.log("Rover can't go outside of the board!")
 }
 if (rover.direction === "N") {
    rover.position.y--;
  } else if (rover.direction === "E") {
    rover.position.x++;
  } else if (rover.direction === "S") {
    rover.position.y++;
  } else if (rover.direction === "W") {
    rover.position.x--
  }
  console.log(rover.position)
 const nextPosition = {x: rover.position.x, y: rover.position.y};
 rover.travelLog.push(nextPosition)
}
function moveBackwards(rover){
 if (!isAbleToMove(rover.direction, 'b')) {
return console.log("Rover can't go outside of the board!")
 }
 if (rover.direction === "N") {
    rover.position.y++;
  } else if (rover.direction === "E") {
    rover.position.x--;
  } else if (rover.direction === "S") {
    rover.position.y--;
  } else if (rover.direction === "W") {
    rover.position.x++
  } const nextPosition = {x: rover.position.x, y: rover.position.y};
 rover.travelLog.push(nextPosition)
}
function isAbleToMove(direction, command) {
  if (command === "f") {
  if (rover.direction === "N" && rover.position.y === 0) {
return false 
  } else if (rover.direction === "S" && rover.position.y === 9) {
    return false
  } else if (rover.direction === "W" && rover.position.x === 0) {
    return false
  } else if (rover.direction === "E" && rover.position.x === 9) {
    return false
  } else 
  return true
  } else if (command === "b") {
     if (rover.direction === "S" && rover.position.y === 0) {
return false
  } else if (rover.direction === "N" && rover.position.y === 9) {
    return false
  } else if (rover.direction === "E" && rover.position.x === 0) {
    return false
  } else if (rover.direction === "W" && rover.position.x === 9) {
    return false
  } else 
  return true
 }
 }
function commands(rover, orders){
 
  for (let i = 0; i < orders.length; i++){
    let order = orders[i];
    switch(order){
      case "f": 
        moveForward(rover);
        break;
      case "l":
        turnLeft(rover);
        break;  
      case "r": 
       turnRight(rover);
        break; 
        case "b":
        moveBackwards(rover);
        break;
        default:
        continue
    }
  }
  console.log(rover.position);
}
commands(rover, "rffrfflfrffb");
console.log(rover)
