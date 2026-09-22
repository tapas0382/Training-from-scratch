def subarray_with_sum(arr, S):
    start = 0
    current_sum = 0

    for end in range(len(arr)):
        current_sum += arr[end]

        while current_sum > S and start <= end:
            current_sum -= arr[start]
            start += 1

        if current_sum == S and start <= end:
            return f"{start + 1} {end + 1}"

    return "-1"

N1, S1 = 5, 12
arr1 = [1, 2, 3, 7, 5]
print(f"Input: arr = {arr1}, S = {S1}")
print("Output: ", subarray_with_sum(arr1, S1))
print()
N2, S2 = 4, 15
arr2 = [1, 2, 3, 4]
print(f"Input: arr = {arr2}, S = {S2}")
print("Output: ", subarray_with_sum(arr2, S2))