var a=[[0, 1, 2], [2, 3, 4], [3, 4, 5, 6], [7, 8, 9, 10, 11], [12, 13, 14]]
var i=0
var sum=0
while(i<a.length){
     var j=0
     while(j<a[i].length){
         sum=sum+a[i][j]
         j+=1
     }i+=1
}console.log("all element sum:",sum)


