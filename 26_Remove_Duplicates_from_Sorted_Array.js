/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for(let i = 0; i < nums.length;  i++) {
       for (j = nums.length; j >= i+1; j--){
           if(nums[i] == nums[j]){
              nums.splice(i,1);
               }
           }
       }
};