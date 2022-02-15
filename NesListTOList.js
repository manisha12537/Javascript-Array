var a=[12, 45,[ 23, 67], 78, 90, 45, 32, [100, 76, 38, 62],[ 73, 29], 83]
var i=0
var list=[]
while(i<a.length){
    var k=a[i]
    if(Object.prototype.toString.call(k)=="[object Array]"){
        var j=0
        while(j<k.length){
            list.push(k[j])
            j+=1
        }
    }else{
        list.push(k)
    }
    i+=1
}
console.log(list)