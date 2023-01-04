var findMedianSortedArrays = function(nums1, nums2) {

    var children = nums1.concat(nums2);
	children.sort();
    
    let median;
    
    if (children.length % 2 !== 0){
        let medianIndex = Math.floor(children.length/2)
        median = children[medianIndex]
    }
    else{
        let medianIndex = Math.floor(children.length/2)
        median = (children[medianIndex] + children[medianIndex]-1) /2
    }

    return median;
    
};