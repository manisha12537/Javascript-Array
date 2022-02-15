var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
var count_odd_numbers=0;
var sum_odd_numbers=0;
var sum_even_numbers=0;
var count_even_numbers=0;
var e_avg=0
var o_avg=0
var avg=0
var i=0
while(i<elements.length){
    if(elements[i]%2==0){
        count_even_numbers+=1
        sum_even_numbers+=elements[i]
        e_evg=sum_even_numbers/count_even_numbers
    }else{
        count_odd_numbers+=1
        sum_odd_numbers+=elements[i]
        o_avg=sum_odd_numbers/count_odd_numbers
    }
    i++
}console.log("odd_number count:",count_odd_numbers)
console.log("even number count",count_even_numbers)
console.log("odd number sum",sum_even_numbers)
console.log("even number sum",sum_odd_numbers)
console.log("even number avarage",e_avg)
console.log("even number avarage",o_avg)


