var a=['s', 'd', 'f', 's', 'd', 'f', 's', 'f', 'k', 'o', 'p', 'i', 'w', 'e', 'k', 'c']
var i=0
var list=[]
while(i<a.length){
    if(!list.includes(a[i])){
        list.push(a[i])
    }i+=1
}var j=0
count=0
while(j<list.length){
    var k=0
    while(k<a.length){
        if(a[k]==list[j]){
            count=(a[k],k)
        }k+=1
    }console.log("index of last dupicate ",list[j],count)
    j+=1
}