var n = [19, 17, 12, 17, 17, 18, 10, 17, 14, 12, 19, 17, 12, 13, 11]
var list2=[]
var list=[]
for(var i of n){
    if(!list.includes(i)){
        list.push(i)
    }
}
for(var j of list){
    count=0
    for(var k of n){
        if(j==k){
            count+=1
        }
    }
if(count>1){
    list2.push(j)
}
}console.log(list2)






var n = [19, 17, 12, 17, 17, 18, 10, 17, 14, 12, 19, 17, 12, 13, 11]
var a=[]
var i=0
while(i<n.length){
    if(!a.includes(n[i])){
        a.push(n[i])
    }i++
}
var j=0
var b=[]
while(j<a.length){
    var k=0
    count=0
    while (k<n.length){
        if(a[j]==n[k]){
            count+=1
        }k++
    }if(count>1){
        b.push(a[j])
    }j++

}console.log(b)