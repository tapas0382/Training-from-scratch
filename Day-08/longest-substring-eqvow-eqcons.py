def longest_equal_substring(S):
    vowels = set('aeiou')

    sum_index_map = {0: -1}

    running_sum = 0
    max_length = 0

    for i, ch in enumerate(S):
        if ch in vowels:
            running_sum += 1
        else:
            running_sum -= 1

        if running_sum in sum_index_map:
            length = i - sum_index_map[running_sum]
            max_length = max(max_length, length)
        else:
            sum_index_map[running_sum] = i

    return max_length

test_cases = ["abcde", "aabb", "xyz", "aeiou"]

for S in test_cases:
    result = longest_equal_substring(S)
    print(f"S = {S!r} -> Longest substring length = {result}")