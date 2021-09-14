exports.mtable = function(number){
    var table = [];
    for(let i = 1; i <= 10; i++) {

        
        const result = i * number;
    
        table.push(number+" * " + i +" = "+ result);
        
}
    g= table.join("<br>");
    return g;
}