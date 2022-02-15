var a=[4, 6, 4, 3, 3, 4, 3, 4, 6, 6]
var i=0
var b=[]
while(i<a.length){
    if(!b.includes(a[i])){
        b.push(a[i])
    }i+=1
}var j=0
var c=[]
while(j<b.length){
    var count=0
    var k=0
    while(k<a.length){
        if(b[j]==a[k]){
            count+=1
        }k+=1
    }if(count>2){
        c.push(b[j])
    }j+=1
}console.log(c)