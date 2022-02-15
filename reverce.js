var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7]
var k=numbers.length-1
let num=[]
var i=0
while(i<numbers.length){
    num.push(numbers[k])
    i++
    k--
}console.log(num)


// var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7]
// var k=numbers.length-1
// let num=[]
// for(var i=0;i<numbers.length;i++){
//     num.push(numbers[k])
//     k--
// }console.log(num)


// var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7]
// var k=numbers.length-1
// let num=[]
// var i=0
// do{
//     num.push(numbers[k])
//     k--
//     i++
// }while(i<numbers.length)
// console.log(num)


// var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7]
// let num=[]
// for(var i=numbers.length-1;i>=0;i--){
//     num.push(numbers[i])
// }console.log(num)