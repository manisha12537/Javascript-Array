var a=[1234, 122, 1984, 19372, 100]
var i=0
var list=[]
var s=false
while(i<a.length){
    var j=String(a[i])
    var k=j[0]
    list.push(k)
    i+=1
}var b=list[0]
var c=0
while(c<list.length){
    if(list[c]==b){
        s=true

    }else{
        s=false
    }c+=1
}console.log("all first element are equal:=",s)
