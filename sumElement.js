var a=[12, 67, 98, 34]
var i=0
var list=[]
var sum=0
while(i<a.length){
    var j=String(a[i])
    var k=0
    while(k<j.length){
        sum=sum+parseInt(j[k])
        
        k+=1

    } list.push(sum)
    i+=1
}
console.log(list)


