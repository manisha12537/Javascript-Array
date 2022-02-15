// var a= [0,9,5]
// var i=0
// while(i<a.length){
//     var j=0
//     while(j<a.length){
//         var k=0
//         while(k<a.length){
//             if(i!=j && i!=k && j!=k){
//                 console.log(a[i],a[j],a[k])
//             }k+=1
//         }j+=1
//     }i+=1
// }


var a= [0,9,5]
for(var i in a){
    for(var j in a){
        for(var k in a){
            if(i!=j && i!=k && j!=k){
                console.log(a[i],a[j],a[k])
            }
        }
    }
}

