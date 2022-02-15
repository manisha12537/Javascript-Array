var a=[[10, 20], [30, 40], [50, 60], [30, 20, 80]]
var b=[[61], [12, 14, 15], [12, 13, 19, 20], [12]]

var l=0
while(l<a.length){
    var i=0
    while(i<b.length){
        var j=b[i]
        if(typeof(j)=="object"){
            k=0
            while (k<j.length){
                k+=1
        }a[i].push(j[k])
        i+=1
            
            // console.log()
        }
    }
}console.log(a)