var arr=[5,3,2,1,5]
var i=0
var sum=0
var arr2=[]
while(i<arr.length){
    sum+=arr[i]
    arr2.push(sum)
    i++
}
console.log(arr2)