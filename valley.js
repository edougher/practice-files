/*
A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.

Given the sequence of up and down steps during a hike, find and print the number of valleys walked through.

    Example

 steps = 8
 path = [DDUUUUDD]

The hiker first enters a valley 2 units deep. Then they climb out and up onto a mountain 2 units high. Finally, the hiker returns to sea level and ends the hike.

    Function Description

countingValleys has the following parameter(s):

int steps: the number of steps on the hike
string path: a string describing the path

    Returns

int: the number of valleys traversed
*/
/*
const step = "DDUUUUDD"
const steps = step.length

const climbs = (stepCount, stepDirection) => {
    let step = stepCount
    let steps = stepDirection.split('')
    let seaLevel = 0
    let down = 0
    let up = 0
    for (let i of steps) {
        
        console.log(i);
    }
    console.log(stepCount, stepDirection);
}

climbs(steps, step)
  
*/

// recursive function

function count(num) {
    console.log(num);

    //each time func is called decrease arg value by one
    let nextNumber = num - 1;
    // keep calling itself until arg reaches 1 (greater than 0)
    if (nextNumber > 0) {
        count(nextNumber);
    }

}
console.log(count(5));