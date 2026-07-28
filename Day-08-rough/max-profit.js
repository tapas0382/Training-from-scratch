function maxProfit (stock) {
    let lowestPrice = Infinity;         
    let profit = 0;                     
    let maxProfit = 0;                 

    for (let price of stock) {          
        if (price < lowestPrice) {      
            lowestPrice = price;        
        }
        profit = price - lowestPrice;   
        
        if (maxProfit < profit) {       
            maxProfit = profit;         
        };
    };
    return maxProfit;
};
console.log(maxProfit([7,1,5,3,6,4]));   // 5
console.log(maxProfit([7,6,4,3,1]));     // 0
console.log(maxProfit([2,4,1]));         // 2
console.log(maxProfit([3,3,3]));         // 0