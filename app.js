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

//Max Subarray
function maxSubArray(A) {
    var prev = 0;
    var max = -Number.MAX_VALUE;
  
    for (var i = 0; i < A.length; i++) {
      prev = Math.max(prev + A[i], A[i]);
      max = Math.max(max, prev);
    }
    return max;
  }

//Reverse Integer
function reverseInteger(num) {
    let sum = 0;
    let one = "1";
    let revArr = num.toString().split('');
    console.log(revArr)
    for(let i = 0; i < revArr.length; i++) {
        let zeros = "0".repeat(i);
        let multiplier = parseInt(one + zeros)
        sum += (parseInt(revArr[i]) * multiplier);
    }
    return sum;
};

reverseInteger(123);

//Two Sum Sum of two numbers
var twoSum = function(arr, sum) {
    for(let i = 0; i < arr.length; i++) {
        let addened = sum-arr[i];
        if(arr.slice(i+1).lastIndexOf(addened) !== -1) {
            return [i, arr.lastIndexOf(addened)]
        } else {
            continue;
        };
    };
    return -1;
};

//Square Root

const mySqrt = function(x) {
    let result = 1;
    while (result*result <= x) result++;
    return result - 1;
};

var mySqrt = function(x) {
    if(x === 0) return 0;
    if(x === 1) return 1;
        for(let i = 0; i <= x; i++) {
        if(i * i < x) {
            continue
        } else if(i * i > x) {
            return i - 1;
        } else {
            return i;
        }
    }
};


//Needle haystack substring
var strStr = function(haystack, needle) {
    if(haystack==="" && needle==="") return 0;
    return haystack.indexOf(needle);
};

//Longest common prefix

var longestCommonPrefix = function(strs) {
    'use strict';
    if (strs === undefined || strs.length === 0) { return ''; }
    
    return strs.reduce((prev, next) => {
        let i = 0;
        while (prev[i] && next[i] && prev[i] === next[i]) i++;
        return prev.slice(0, i);
    });
};

//Climb Stairs Stair climb stare climbing 

function climbStairs(n) {
    let dp = new Array(n+1);
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[n];
};