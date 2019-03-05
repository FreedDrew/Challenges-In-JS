function openOrSenior(data){
    let placement = [];
    for(let i = 0; i < data.length; i++){
        if(data[i][0] >= 55 && data[i][1] > 7){
            placement.push('Senior');
        } else {
            placement.push('Open');
        }
    }
    return placement;
}