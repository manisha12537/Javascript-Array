var n=["m","j","l","a","y","a","l","a","m"]
i=0
k=n.length-1
pailndrom=false
while(i<n.length){
    if(n[k]==n[i]){
        pailndrom=true
    }else{
        pailndrom=false
    }i++
    k--
}console.log(pailndrom)



// var n=["m","j","l","a","y","a","l","a","m"]
// k=n.length-1
// pailndrom=false
// for(var i=0;i<n.length;i++){
//     if(n[i]==n[k]){
//         pailndrom=true
//     }else{
//         pailndrom=false
//     }k--
// }console.log(pailndrom)



// var n=["m","j","l","a","y","a","l","a","m"]
// k=n.length-1
// pailndrom=false
// var i=0
// do{
//     if(n[i]==n[k]){
//         pailndrom=true
//     }else{
//         pailndrom=false
//     }i++
//     k--
// }while(i<n.length)
// console.log(pailndrom)