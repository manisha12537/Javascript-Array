// var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
// var odd_count=0
// var even_count=0
// var i=0
// while(i<elements.length){
//     if(elements[i]%2==0){
//         even_count+=1
//     }else{
//         odd_count+=1
//     }i+=1
// }console.log("odd number count",odd_count)
// console.log("even number count",even_count)



// var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
// var odd_count=0
// var even_count=0
// for(var i=0;i<elements.length;i++){
//     if(elements[i]%2==0){
//         even_count+=1
//     }else{
//         odd_count+=1
//     }
// }console.log("even number count",even_count)
// console.log("odd number count",odd_count)


var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
var odd_count=0
var even_count=0
var i=0
do{
    if(elements[i]%2==0){
        even_count+=1
    }else{
        odd_count+=1
    }i++
}while(i<elements.length)
console.log("even number count",even_count)
console.log("odd number count",odd_count)