// contains duplicate
function containsDuplicate(nums) {
    return new Set(nums).size !== nums.length;
}

// Two Sum
function twoSum(nums, target) {
    const map = new map();
    for (let i = 0; i < nums.length; i ++) {
        let diff = target - nums[i];
        if (map.has(diff)) return [map.get(diff), i];
        map.set(nums[i], i);
    }
}

// valid Parentheses
function isValid(s) {
    const stack = [];
    const pairs = { ')': '(', '}': '{', ']': '[' };
    for (let char of s) {
        if (!pairs[char]) {
            stack.push(char);
        } else if (stack.pop() !== pairs[char]) {
            return false;
        }
    }
    return stack.length === 0;
}