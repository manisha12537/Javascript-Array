var a=[4,3, 5, 5, 5, 3, 8,3]
var i=0
var b=[]
while(i<a.length){
    if(!b.includes(a[i])){
        b.push(a[i])
    }i+=1
}
var j=0
var c=[]
while(j<b.length){
    var count=0
    var k=0
    while(k<a.length){
        if(b[j]==a[k]){
            count+=1
        }k+=1
    }if(count==3){
        console.log(b[j])
    }j+=1
}


