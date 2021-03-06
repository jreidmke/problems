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

//Palindrome

function isPalindrome(s) {
    s=s.replace(/\W/g, '').toLowerCase();
    let left=0;
    let right=s.length-1;
    while(left <= right) {
        if(s[left]===s[right]) {
            ++left;
            --right;
        }
        if(left >= right) {
            return true;
        }
    }
    return false;
};

function pivot(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i-1] < arr[i] && arr[i] > arr[i+1]) {
            return i;
        };
        continue;
    }
}


//BINARY SEARCH search binary
function pivot(arr) {
    let left = 0;
    let right = arr.length - 1;

    while(left <= right) {
        let mid = Math.floor((left + right) / 2);

        if(right === left + 1) {
            if(arr[left] < arr[right]) {
                return right
            } else {
                return left
            };
        };


        if(arr[mid - 1] < arr[mid] && arr[mid] < arr[mid + 1]) {
            left = mid + 1;
        };

        if(arr[mid - 1] > arr[mid] && arr[mid] > arr[mid + 1]) {
            right = mid - 1;
        };

        if(arr[mid - 1] < arr[mid] && arr[mid + 1] < arr[mid]) {
            return mid;
        }

        if(arr[mid + 1] === undefined && arr[mid - 1] === undefined) {
            return mid;
        }
    };
}

pivot([1, 2, 3, 4, 5])

//cleaner readable pivot
function pivot(arr) {
    let obj = {};
    for(let i = 0; i < arr.length; i++) {
        obj[arr[i]] = i
    };
    return obj[arr.sort((a, b) => a - b)[arr.length - 1]];
};

let x = [5, 7, 9, 13, 11, 10];

pivot(x);


function find_boundary(arr) {
    let left = 0;
    let right = arr.length - 1;
    if(arr[0]===true) return 0;
    
    while(left < right) {

        if(left === right - 1) {
            if(arr[right]) {
                return right;
            } else {
                return false;
            }
        };
        
        let mid = Math.floor((left + right) / 2);
        
        if(arr[mid] === true && arr[mid - 1] === false) {
            return mid;
        };

        if(arr[mid] === true && arr[mid - 1] === true) {
            right=mid - 1;
        };

        if(arr[mid] === false && arr[mid + 1] === false) {
            left = mid + 1;
        };
    };
    return -1;
};

//Better bool boundary

function find_boundary(arr) {
    let left = 0;
    let right = arr.length - 1;
    while(left <= right) {
        let mid = Math.floor((left + right) / 2);

        if(!arr[mid]) {
            left = mid + 1;
        };

        if(arr[mid] && !arr[mid - 1]) {
            return mid;
        };

        if(arr[mid]) {
            right = mid - 1;
        };

    };
    return -1
}

find_boundary([false])


function findFirstOccurrence(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        if(arr[mid] < target) left = mid + 1;
        if(arr[mid] > target || arr[mid] === target && arr[mid - 1] === target) right = mid - 1;
        if(arr[mid] === target && arr[mid - 1] !== target) return mid
    };
    return -1;
};

const a = [1, 22, 22, 33, 50, 100, 20000]
const t = 33;

findFirstOccurrence(a, t)

//Better find first Occurrence

function findFirstOccurrence(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let idx = -1;
    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        if(arr[mid]===target) {
            idx=mid;
            right = mid - 1;
        };
        if(arr[mid] > target) {
            right = mid - 1;
        };

        if(arr[mid] < target) {
            left = mid + 1;
        };
    };
    return idx;
}

function findMinRotated(arr) {
    let left = 0;
    let right = arr.length - 1;
    while(left <= right) {
        let lastEl = arr[right];
        let mid = Math.floor((left + right) / 2);
        if(left === right - 1) {
            if(arr[left] < arr[right]) {
                return left
            } else {
                return right;
            }
        }

        if(arr[mid] === lastEl) return mid;

        if(arr[mid] > lastEl) {
            left = mid + 1;
        }

        if(arr[mid] < lastEl) {
            right = mid - 1;
        }
        
        lastEl = arr[right];
    } 
}

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while(left <= right) {
        let mid = Math.floor((left + right) / 2);

        if(arr[mid] > target) right = mid - 1;

        if(arr[mid] < target) left = mid + 1;

        if(arr[mid] === target) return mid;
    }
    return -1
}

//new square root function
function squareRoot(n) {
    let left = 0;
    let right = n;
    let root;
    while(left <= right) {
        let curr = Math.floor((left + right) / 2);
        if(curr * curr > n) {
            right = curr - 1;
        };

        if(curr * curr <= n) {
            root = curr;
            left = curr + 1;
        }
    }
    return root;
}

//ULTIMATE PIVOT

function pivot(arr) {
    let left = 0;
    let right = arr.length - 1;
    let idx;
    while(left <= right) {
        if(left === right - 1) {
            if(arr[left] > arr[right]) {
                return left
            } else {
                return right
            }
        }
        let mid = Math.floor((left + right) / 2);
        if(arr[mid] > arr[mid + 1]) {
            idx = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        };
    };
    return idx;
}

//Better pivot. Even better than ultimate!!

function pivot(arr) {
    let left = 0;
    let right = arr.length - 1;
    let idx;
    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        if(arr[mid] > arr[mid + 1] || !arr[mid + 1]) {
            idx = mid;
            right = mid - 1
        } else {
            left = mid + 1;
        };
    };
    return idx;
};

function findPivot(arr, target) {
    let p = pivot(arr);
    let left = 0;
    let right = p;
    let isLeft = true;
    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        if(arr[mid] === target) return mid;
        if(left===right) {
            isLeft = false;
            left = p;
            right = arr.length - 1;
        }
        if(isLeft) {
            if(arr[mid] > target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            if(arr[mid] < target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
    }
}

function findIdx(arr, target) {
    let left = 0;
    let p = pivot(arr);
    let right = p;
    let idx = -1;
    while(true) {
        while(left <= right) {
            let mid = Math.floor((left + right) / 2);
            if(arr[mid] === target) return mid;
            if(arr[mid] > target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        left=p
        right = arr.length - 1;
        
        while(left <= right) {
            let mid = Math.floor((left + right) / 2);
            if(arr[mid] === target) return mid;
            if(arr[mid] < target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
    }    
    return idx;
}

//LOOK HERE TOMORROW!!!!

//final pivot and find idx

function pivot(arr) {
    let left = 0;
    let right = arr.length - 1;
    let idx;
    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        if(arr[mid] > arr[mid + 1] || !arr[mid + 1]) {
            idx = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    };
    return idx;
};

function findPivot(arr, target) {
    let p = pivot(arr);
    let left = 0;
    let right = p;
    let isLeft = true;
    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        if(arr[mid] === target) return mid;
        if(left===right) {
            isLeft = false;
            left = p;
            right = arr.length - 1;
        }
        if(isLeft) {
            if(arr[mid] > target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            if(arr[mid] < target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
    }
}



function pivot(arr) {
    let left = 0;
    let right = arr.length - 1;
    let idx;
    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        if(arr[mid] > arr[mid + 1] || !arr[mid + 1]) {
            idx = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    };
    return idx;
};

function findIdx(arr, target) {
    let p = pivot(arr);
    let left = 0;
    let right = p;
    let isLeft = true;
    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        if(arr[mid] === target) return mid;
        if(left===right) {
            isLeft = false;
            left = p;
            right = arr.length - 1;
        }
        
        if(isLeft) {
            if(arr[mid] > target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            if(arr[mid] < target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
    }
}

const arr1 = [1, 3, 5, 6, 8, 7];
const arr2 = [5, 6, 4, 3, 2, 1];
const arr3 = [1, 2, 3, 4, 5, 6];
const arr4 = [1];
const arr5 = [6, 5, 4, 3, 2, 1];
const arr6 = [2, 3, 4, 5, 6, 1];
const arr7 = []

findIdx(arr5, 1)

//FINAL The Last One
function pivot(arr) {
    let left = 0;
    let right = arr.length - 1;
    let idx;
    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        if(arr[mid] > arr[mid + 1] || !arr[mid + 1]) {
            idx = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    };
    return idx;
};


function findIdx(arr, target) {
    let p = pivot(arr);
    let left = 0;
    let right = p;
    let isLeft = true;
    while(left <= right) {
        let mid = Math.floor((left + right) / 2);

        if(arr[mid] === target) return mid;

        if(left===right) {
            isLeft = false;
            left = p;
            right = arr.length - 1;
        }
        
        let operator = isLeft ? arr[mid] > target : arr[mid] < target;

        if(operator) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
}

function addOne(x) {
    return x + 1;
};

function findMostFreq(arr) {
    let obj = {};
    for(obj of arr) {
        arr[obj] ? arr[obj]++ : arr[obj] = 1
    };
    return obj;
}

function factorial(n) {
    let stack = [];
    while(n > 0) {
        stack.push(n);
        n -= 1;
    };
    let res = 1;
    while(stack.length) {
        res *= stack.pop();
    };
    return res;
};

function visibleTreeNode(root) {
    return dfs(root, Number.NEGATIVE_INFINITY);
};

function dfs(root, max) {
    if(!root)return 0;
    let total = 0;
    if(root.val > max) total++;
    
    total += dfs(root.left, Math.max(root.val, max));
    total += dfs(root.right, Math.max(root.val, max));
    return total;
};

function valid_bst(root) {
    return dfs(Number.NEGATIVE_INFINITY, root, Number.POSITIVE_INFINITY);
};

function dfs(low, root, hi) {
    if(!root) return true;
    if(!(low <= root.val && root.val <= hi)) return false;
    return dfs(low, root.left, root.val) && dfs(root.val, root.right, hi);
};

function helper(tree) {
    let array = [];
    dfs(tree, array);
    return array;
}

function dfs(node, arr) {
    if(!node) {
        arr.push("x");
        return;    
    }
    arr.push(node.value);
    dfs(node.left, arr);
    dfs(node.right, arr);
};


function serialize(root) {
    let res = [];
    dfsS(root, res);
    return res.join(' '); 
};

function dfsS(root, arr) {
    if(!root) {
        arr.push("x");
        return;
    };
    arr.push(root.val);
    dfsS(root.left, arr);
    dfsS(root.right, arr);
};

function lca(root, node1, node2) {
    if(!root) return;
    if(root.val > Math.max(node1.val, node2.val)) {
       return lca(root.left, node1, node2)
    } else if(root.val < Math.min(node1.val, node2.val)) {
       return lca(root.right, node1, node2)
    } else {
        return root;
    };
};