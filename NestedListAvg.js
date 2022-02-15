
var a=[[0, 1, 2], [2, 3, 4], [3, 4, 5, 6], [7, 8, 9, 10, 11], [12, 13, 14]]
var i=0
var avg_list=[]
while(i<a.length){
    var j=0
    sum=0
    var avg=0
    while(j<a[i].length){
        sum=sum+a[i][j]
        avg=sum/a[i].length
        j+=1
    }
    i+=1
    avg_list.push(avg)
}console.log(avg_list)