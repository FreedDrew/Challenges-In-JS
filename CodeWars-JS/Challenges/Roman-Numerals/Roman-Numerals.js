function solution(roman){
    let romanValue = 0;
   let equivalents = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    };
    let exceptions = [
        "CD",
        "CM",
        "XL",
        "XC",
        "IV",
        "IX"
    ];
    for(let i=0; i<roman.length; i++) {
        exceptions.indexOf(roman[i]+ roman[i+1])===-1
            ? romanValue+=equivalents[roman[i]] : romanValue-=equivalents[roman[i]] ;
    }
    return romanValue;
}




