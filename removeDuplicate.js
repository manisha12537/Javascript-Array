var list = [1,2,3,1,2,2]
var list2=[]
for (var i of list){
    if(!list2.includes(i)){
        list2.push(i)
    }
}
console.log(list2)