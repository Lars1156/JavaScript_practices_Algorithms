// Find the maximum  profit Of Given Array
function maxProfit(prices) {
    let min_price = Infinity;
    let max_profit = 0;
    
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < min_price) {
            min_price = prices[i];
        } else {
            let profit = prices[i] - min_price;
            if (profit > max_profit) {
                max_profit = profit;
            }
        }
    }
    
    return max_profit;
}

let prices = [4,6,7,1,2,3];
console.log(maxProfit(prices));

// Area of Trangle

function area(base, hight){
    return base * hight /2
}
console.log(area(2,5));
