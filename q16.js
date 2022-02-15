// var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43];
// var even_sum=0
// var odd_sum=0
// var i=0
// while(i<elements.length){
//     if(elements[i]%2==0){
//         even_sum+=elements[i]
//     }else{
//         odd_sum+=elements[i]
//     }i++
// }console.log("even number sum",even_sum)
// console.log("odd number sum",odd_sum)


// var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43];
// var even_sum=0
// var odd_sum=0
// var i=0
// do{
//     if(elements[i]%2==0){
//         even_sum+=elements[i]
//     }else{
//         odd_sum+=elements[i]
//     }i++
// }while(i<elements.length)
// console.log("even number sum",even_sum)
// console.log("odd number sum",odd_sum)




var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43];
var even_sum=0
var odd_sum=0
for(var i in elements){
    if(elements[i]%2==0){
        even_sum+=elements[i]
    }else{
        odd_sum+=elements[i]
    }
}console.log(even_sum)
console.log(odd_sum)
