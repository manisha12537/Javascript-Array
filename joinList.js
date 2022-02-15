var a=['red', 'green', 'black', 'blue', 'white']
var b=['100', '200', '300', '400', '500']
var d=['0', '1', '2', '3', '4']
var i=0
var c=[]
while(i<a.length){
    c.push(d[i]+a[i]+b[i])
    i+=1
}console.log(c)
