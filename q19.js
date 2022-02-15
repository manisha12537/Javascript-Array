var kitnapaisahai = [3000, 600000, 324990909, 90990900, 30000, 5600000, 690909090, 31010101, 532010, 510, 4100]
count_lakhapati=0
count_carorepati=0
count_dilwale=0
for(var i=0;i<kitnapaisahai.length;i++){
    if(kitnapaisahai[i]>=10000000){
        count_carorepati+=1
    }else if(kitnapaisahai[i]>100000 && kitnapaisahai[i]<1000000){
        count_lakhapati+=1
    }else if(kitnapaisahai[i]<100000){
        count_dilwale+=1
    }
}console.log("count_dilwale",count_dilwale)
console.log("count_lakhapati",count_lakhapati)
console.log("count_karorepati",count_carorepati)



