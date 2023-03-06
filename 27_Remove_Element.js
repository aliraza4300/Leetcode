/**
 * @param {number[]} nums
 * @return {number}
 */
var removeElement = function(nums) {
    var j = 0;

    for (var i = 0; i < nums.length; i++){
        if (nums[i] !== val){
            nums[j] = nums[i];
            j++;
        }
    }

    return j;
};