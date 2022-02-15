// var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
// let sum=0
// let count=0
// let e_evg=0
// let o_avg=0
// let i=0
// while(i<elements.length){
//     if(elements[i]%2==0){
//         sum+=elements[i]
//         count+=1
//         e_evg=sum/count
//     }else{
//         sum+=elements[i]
//         count+=1
//         o_avg=sum/count
//     }i++
// }
// console.log("odd number avarage",o_avg)
// console.log("even number avarage",e_evg)



// var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
// let sum=0
// let count=0
// let e_evg=0
// var e_count=0
// var o_count=0
// let o_avg=0
// for(var i=0;i<elements.length;i++){
//     if(elements[i]%i==0){
//         e_count+=1
//         sum+=elements[i]
//         e_evg=sum/e_count
//     }else{
//         o_count+=1
//         sum+=elements[i]
//         o_avg=sum/o_count
//     }
// }console.log(e_evg)
// console.log(o_avg)



var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
let sum=0
let count=0
let e_evg=0
let o_avg=0
var even_count=0
var odd_count=0
let i=0
while(i<elements.length){
    if(elements[i]%2==0){
        sum+=elements[i]
        even_count+=1
        e_evg=sum/even_count
    }else{
        sum+=elements[i]
        odd_count+=1
        o_avg=sum/odd_count
    }i++
}
console.log("odd number avarage",o_avg,odd_count)
console.log("even number avarage",e_evg,even_count)