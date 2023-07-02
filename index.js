function findsock(laundry) {
    for(const item of laundry) {
        if (item ==="sock") return item;
    }
}

findsock(["shirt", "shorts", "sock" ,"pants"]);
 

// using the logarithmic way (binary search)
function findsock(sortedLaundry) {
    let start = 0;
    let end = sortedLaundry.length;

    while (start<= end) {
        let mid = math.floor((start + end) /2);

        if (sortedLaundry[mid]=== "sock") return "sock";

        if (sortedLaundry[mid] <"sock") {
            start = mid + 1;
        } else {
            end = mid -1;
        } 
        
    }
}

// using object method , more precise and effecient
// using quadratic , this solves when we want to find a matching pair/nested loops
function findPair(laundry) {
    // look through each item in the pile
    for (let i = 0; i < laundry.length; i++) {
      // look through the rest of the pile
      for (let j = i + 1; j < laundry.length; j++) {
        // check if it matches the first sock
        if (laundry[i] === laundry[j]) {
          return [laundry[i], laundry[j]];
        }
      }
    }
  }
  
  findPair(["sock 5", "sock 2", "sock 1", "sock 3", "sock 1"]);