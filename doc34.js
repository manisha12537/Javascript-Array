var a=[34.67, 12, -94.89, 'Python', 0, 'C#']
var i=0
var b=[]
while(i<a.length){
    if(typeof(a[i])=="number"){
        b.push(a[i])
    }
    i+=1
}console.log(b)
