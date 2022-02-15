var a=['Red', 'Maroon', 'Yellow', 'Olive']
var i=0
var list1=[]
while(i<a.length){
    var list=[]
    var j=0
    while(j<a[i].length){
        list.push(a[i][j])
        j+=1
    }list1.push(list)
    i+=1
}console.log(list1)
