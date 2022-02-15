var a=[1, 1, 1, 64, 23, 64, 22, 22, 22]
var i=0
var b=[]
while(i<a.length){
    if(!b.includes(a[i])){
        b.push(a[i])
    }i+=1
    
}
var j=0
while(j<b.length){
    var count=0
    var k=0
    while(k<a.length){
        if(b[j]==a[k]){
            count+=1
        }k+=1
    }if(count>2){
        console.log(b[j])
    }j+=1
}
