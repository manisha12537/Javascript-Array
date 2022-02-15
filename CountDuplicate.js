var char_list = ["a", "n", "t", "a", "a", "t", "n", "n", "a", "x", "u", "g", "a", "x", "a"]
var list=[]
for(var i of char_list){
    if(!list.includes(i)){
        list.push(i)
    }
}
for( var j of list){
    count=0
    for(var k of char_list){
        if(j==k){
            count+=1
        }
    }
console.log(j,count)
}




// var char_list = ["a", "n", "t", "a", "a", "t", "n", "n", "a", "x", "u", "g", "a", "x", "a"]
// var i=0
// var list=[]
// while(i<char_list.length){
//     if(!list.includes(char_list[i])){
//         list.push(char_list[i])
//     }i++
// }console.log(list)
// var j=0
// var list1=[]
// while(j<list.length){
//     var k=0
//     var count=0
//     while(k<char_list.length){
//         if(char_list[k]==list[j]){
//             count+=1
//         }k++
//     }console.log(list[j],count)
//     j++
// }