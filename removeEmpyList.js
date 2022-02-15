// var a=[5, 6, [], 3, [], [], 9]
// var i=0
// var b=[]
// while(i<a.length){
//     if(Object.prototype.toString.call(a[i])!="[object Array]"){
//         b.push(a[i])
//     }i+=1
// }
// console.log(b)


var a=[5, 6, [], 3, [], [], 9]
var i=0
var b=[]
while(i<a.length){
    if(Object.prototype.toString.call(a[i])!="[object Array]"){
        b.push(a[i])
    }i+=1
}
console.log(b)