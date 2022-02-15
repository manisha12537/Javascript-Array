var a=[[0, 1, 2], [2, 3, 4], [3, 4, 5, 6], [7, 8, 9, 10, 11], [12, 13, 14]]
var list=[]
for(var i=0;i<a.length;i++){
    var sum=0
    for(var j=0;j<a[i].length;j++){
        sum=sum+a[i][j]
    }list.push(sum)
}console.log(list)             





// var a=[[0, 1, 2], [2, 3, 4], [3, 4, 5, 6], [7, 8, 9, 10, 11], [12, 13, 14]]
// var i=0
// var list=[]
// while(i<a.length){
//     var sum=0
//     var j=0
//     while(j<a[i].length){
//         sum+=a[i][j]
//         j+=1
//     }list.push(sum)
//     i+=1
// }console.log(list)