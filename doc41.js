var a=[[0, 1, 2], [2, 4, 5], [2, 3, 4]]
var i=0
var b=0
while(i<a.length){
    b+=1
    var j=0
    var k=0
    while(j<a[i].length){
        k+=1
        j+=1
    }i+=1
}console.log(k,b)