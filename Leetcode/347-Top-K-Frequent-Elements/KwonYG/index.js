const topKFrequent = (nums, k) => {
  const count = {};

  nums.forEach((num) => (count[num] ? (count[num] += 1) : (count[num] = 1)));

  const result = Object.keys(count)
    .sort((a, b) => count[b] - count[a])
    .slice(0, k);

  return result;
};

// topKFrequent([-1, -1], 1);
// topKFrequent([1, 1, 1, 2, 2, 3, 3, 3, 3, 3], 2);
