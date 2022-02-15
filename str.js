// var mainStr = "the quick brown fox jumped over the lazy dog. the dog slept over the verandah."
// var subStr = "over"
// var a=mainStr.split(" ")
// var count=0
// var s=""
// for(var i of a){
//     if(i==subStr){
//         s+=i+" "
//         count+=1
//     }
// }console.log(s,"count:-",count)



var mainStr = "the quick brown fox jumped over the lazy dog. the dog slept over the verandah."
var subStr = "over"
var c=mainStr.split(" ")
var i=0
var a=""
var count=0
while(i<c.length){
    if(subStr==c[i]){
        a+=c[i]+" "
        count+=1
    }i++
}console.log("count:",count,a)