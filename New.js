var list=[8,6,2,6,0,8,7,1,5]
var list2=[]
if(list.length%2==0){
    var a=list.length/2
    var b=a
    while(b<list.length){
       list2.push(list[b])
       b++
    }
    var i=0
    while(i<a){
    list2.push(list[i])
    i++}
}else
{
    var c=list.length/2+1
    var x=Math.floor(c)
    while(x<list.length){
        list2.push(list[x])
        x++
    }
var m=list.length/2
var s=Math.floor(m)
    list2.push(list[s])
    var z=list.length/2-1
    var n=Math.floor(z)
    var t=0
    while(t<z){
        list2.push(list[t])
        t++
    }    
}
console.log(list2)

