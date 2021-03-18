//Pascal Functions Triangle Pascals Tri 

function generate(numRows, tri=[[1], [1, 1]]) {
    if(numRows===1) return [[1]];
    if(tri.length===numRows) return tri;
    let lastRow = tri[tri.length - 1];
    let subArr = [1];
    for(let i=1; i < lastRow.length; i++) {
            subArr.push(lastRow[i-1] + lastRow[i])
    }
    subArr.push(1);
    tri.push(subArr);
    return generate(numRows, tri);
};


function getRow(rowIndex, tri=[[1], [1, 1]]) {
    if(rowIndex===0) return [1];
    if(tri.length - 1===rowIndex) return tri[rowIndex];
    let lastRow = tri[tri.length - 1];
    let subArr = [1];
    for(let i=1; i < lastRow.length; i++) {
            subArr.push(lastRow[i-1] + lastRow[i])
    }
    subArr.push(1);
    tri.push(subArr);
    return getRow(rowIndex, tri);
};

//intersecting arrays

function intersect(nums1, nums2) {
    //start by taking the smaller array
    let smallArr = nums1.length > nums2.length ? nums2 : nums1;
    let largeArr = nums1.length < nums2.length ? nums2 : nums1;
    if(nums1.length===nums2.length) {
            smallArr=nums2;
            largeArr=nums1;
    }
    let currIdx = 0;
    let intersection = [];
    for(let i=0; i < largeArr.length; i++) {
            if(smallArr[currIdx]===largeArr[i]) {
                    intersection.push(largeArr[i]);
                    ++currIdx;
            };
    };
    return intersection;
}

//Max stock profit
var maxProfit = function(prices) {
    let min = Number.MAX_SAFE_INTEGER; 
    let maxProfit = 0;
    for(let i=0; i < prices.length; i++) {
        min = Math.min(min, prices[i]);
        maxProfit = Math.max(maxProfit, prices[i] - min);
    };
    return maxProfit;
};

//Happy Number
var isHappy = function(n) {
    let curr = n;
    let seen = {};
    const getDigits = number => `${number}`.split('').map(str => Number(str));
    while(curr !== 1) {
        let digits = getDigits(curr);
        curr = digits.reduce((acc, curr) => acc + Math.pow(curr, 2), 0);
        if(seen[curr]===undefined) {
            seen[curr]=true;
        } else {
            return false;
        }
    }
    return true;
};