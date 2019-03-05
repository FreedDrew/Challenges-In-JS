function grow(x){
    let multiply = 1;
    for (let i = 0; i < x.length; i++ ) {
        multiply *= Number(x[i]);
        }
    return multiply;
    }