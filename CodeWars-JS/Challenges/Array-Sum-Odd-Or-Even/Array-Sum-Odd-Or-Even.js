

function oddOrEven(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i+=1){
        let s = 0;
        sum += array[i];

    }
    if (sum % 2 == 0) {
        return "even";
    } else {
        return "odd";
    }
}

