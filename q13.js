marks = [
    [78, 76, 94, 86, 88],
    [91, 71, 98, 65, 76],
    [95, 45, 78, 52, 49]
    ]
var i=0
var sum=0
while(i<marks.length){
    var j=0
    while(j<marks[i].length){
        sum+=marks[i][j]
    j++
    }i++
}console.log("all item sum",sum)


// marks = [
//     [78, 76, 94, 86, 88],
//     [91, 71, 98, 65, 76],
//     [95, 45, 78, 52, 49]
//     ]
// var sum=0
// for(var i=0;i<marks.length;i++){
//     for(var j=0;j<marks[i].length;j++){
//         sum=sum+marks[i][j]
//     }
// }console.log(sum)



// marks = [
//     [78, 76, 94, 86, 88],
//     [91, 71, 98, 65, 76],
//     [95, 45, 78, 52, 49]
//     ]
// var sum=0
// var i=0
// do{
//     var j=0
//     while(j<marks[i].length){
//         sum=sum+marks[i][j]
//         j++
//     }i++
// }while(i<marks.length)
// console.log(sum)