/**
 * @param {number[]} cost
 * @return {number}
 */
 var minCostClimbingStairs = function(cost) {
  let first = cost[0];
  let second = cost[1];
  for (let i = 2; i <= cost.length; i++) {
    const minCost = Math.min(first, second);
    first = second;
    if (i < cost.length) second = minCost + cost[i];
    else second = minCost;
  }
  return second;
};