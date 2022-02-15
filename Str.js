// var mainStr = "the quick brown fox jumped over the lazy dog. the dog slept over the verandah."
// var subStr = "over"
// var c=mainStr.split(" ")
// var a=""
// var count=0
// for(var i of c){
//     if(i!=subStr){
//         a+=i+" "
//         count+=1
//     }
// }console.log(a)


var mainStr = "the quick brown fox jumped over the lazy dog. the dog slept over the verandah."
var subStr = "over"
var a=mainStr.split(" ")
var b=""
var i=0
while(i<a.length){
    if(a[i]!=subStr){
        b+=a[i]+" "
    }i++
}console.log(b)