function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const maxDemeritPoints = 12;

    if (speed <= speedLimit) {
        console.log("Ok");
        return 0;
    } else {
        const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
        console.log(`Points: ${demeritPoints}`);
        
        if (demeritPoints > maxDemeritPoints) {
            console.log("License suspended");
        }
        return demeritPoints;
    }
}

// Call back.
calculateDemeritPoints(80); 
calculateDemeritPoints(65); 
calculateDemeritPoints(100);
calculateDemeritPoints(120);
calculateDemeritPoints(130);

