// var n = [19, 17, 12, 17, 17, 18, 10, 17, 14, 12, 19, 17, 12, 13, 11]
// var a=[]
// for(var i of n){
//     if(!a.includes(i))
//     a.push(i)
// }
// l=[]
// for(var j of a){
//     count=0
//     for(var k of n){
//         if(j==k){
//         count+=1
//     }
// }if(count>1){
//         l.push(j)
//     }
// }console.log(l)





var n = [19, 17, 12, 17, 17, 18, 10, 17, 14, 12, 19, 17, 12, 13, 11]
var a=[]
var i=0
while(i<n.length){
    if(!a.includes(n[i])){
        a.push(n[i])
    }i++
}
var j=0
var b=[]
while(j<a.length){
    var k=0
    count=0
    while (k<n.length){
        if(a[j]==n[k]){
            count+=1
        }k++
    }if(count>1){
        b.push(a[j])
    }j++

}
console.log(b)