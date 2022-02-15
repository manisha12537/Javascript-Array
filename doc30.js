var list1 = [2, -7, 5, -64, -14]
var i=0
pos_count=0
neg_count=0
while(i<list1.length){
    if(list1[i]>1){
        pos_count+=1
    }else{
        neg_count+=1
    }i+=1
}
console.log("positive number count",pos_count)
console.log("nagative number count",neg_count)