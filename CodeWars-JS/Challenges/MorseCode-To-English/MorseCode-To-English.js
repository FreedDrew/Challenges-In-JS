// Check out my JS-Random-Web-Apps repository to see my own English ---> Morse translator!

decodeMorse = function(morseCode){

    let str = arguments[0];
    str = str.trim();

    let arr = str.split('   ');

    for(let j = 0; j < arr.length; j++){
        arr[j] = arr[j].split(' ');
    }

    for(let k = 0; k < arr.length; k++){
        for(let i = 0; i < arr[k].length; i++){
            arr[k][i] = MORSE_CODE[arr[k][i]];
        }
    }

    for (let l = 0; l < arr.length; l++){
        arr[l] = arr[l].join('');
    }

    return arr.join(' ');
};
