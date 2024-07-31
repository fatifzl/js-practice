var unSortArray = [15,90,26,89,34,99,43,61,50,78];
var biggestNumber=unSortArray.map(function(){
    var i=unSortArray.length;
    var min=Infinity;
    while(i--){
    if(unSortArray[i]<min){
        min=unSortArray[i];
    }
}
    return min;
});
var smallestNumber=unSortArray.map(function(){
    var i=unSortArray.length;
    var max=-Infinity;
    while(i--){
    if(unSortArray[i]>max){
        max=unSortArray[i];
    }
}
    return max;
});
console.log("biggestNumber:",biggestNumber);
console.log("smallestNumber:",smallestNumber);
