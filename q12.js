var list1 = [1,2,3,4,5,6]
var list2 = [2,3,1,0,6,7]
var list=[]
for( i of list1){
    // console.log(i)
    if(!list2.includes(i)){
        list.push(i)
    }
}console.log(list)

