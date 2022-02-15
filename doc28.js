var a=[1, 1, 2, 3, 4, 5, 1, 2]
var i=0
var j=2
var b=[]
while(i<a.length){
    if(j!=a[i]){
        b.push(a[i])
    }i+=1
}
console.log(b)