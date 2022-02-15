var a=[1, 3, 5, 7, 9, 11, 0, 2, 4, 6, 8, 10, 8, 9, 0, 4, 3, 0]
var i=0
var b=a[0]
while(i<a.length){
    if(i%4==0){
        a[i]=20
    }
    if(i==1){
        a[0]=b
    }i+=1
}
console.log(a)