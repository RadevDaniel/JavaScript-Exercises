function smallestNums(nums){
    let result = nums.sort((a, b) => a - b).splice(0, 2);
    console.log(result.join(' '));
}
smallestNums([30, 15, 50, 5]);