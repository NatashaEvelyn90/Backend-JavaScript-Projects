//! Teacher wanted a function to be made out of the last project we did


function squareTheNumber (arr) {
    var tenOrBelow = [];

    arr.forEach(item => {
        var squaredNum = Math.sqrt(item)
        console.log(squaredNum)

        if (squaredNum <=10) tenOrBelow.push(squaredNum)
    })
    console.log(tenOrBelow)
    return
}

squareTheNumber[256, 16, 9] //16, 4, 3, [4,3]

var arrayOfNumbers = [2, 81, 100, 64, 1, 169]

squareTheNumber(arrayOfNumbers)