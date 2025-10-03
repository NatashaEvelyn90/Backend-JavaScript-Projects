function positiveOrNegative(num) {


    var result

    if(typeof(num)=== 'number') {

        if (num == 0) {
            result = 'Zero'
        } else if (num > 0) {
            result = 'Positve'
        } else {
            result = 'Negative'
        }
    } else {
        result = 'Invalid Input. Must be a number'
    }
    console.log(result)
    return
}

positiveOrNegative(0)
positiveOrNegative(-10)
positiveOrNegative(7)
positiveOrNegative('foo')

//! Followed along with teacher 