const speedDetector = (speed) => {
    // Check speed value
    if (speed < 70) {
        return "Ok"
    } 

    // Create points var, instantiate as 0
    let points = 0;

    // Find speed above threashold
    let excessSpeed = speed - 70;

    // Calculate points and update
    points += Math.floor(excessSpeed / 5);

    // Return message
    return points > 12 ? "License suspended" : `Points: ${points}`
}

console.log(speedDetector(150))