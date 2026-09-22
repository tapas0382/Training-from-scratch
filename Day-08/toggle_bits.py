def toggle_bits(N):
    if N == 0:
        return 1

    num_bits = N.bit_length()

    all_ones_mask = (1 << num_bits) - 1

    return N ^ all_ones_mask

test_cases = [10, 20, 1, 7, 255]

for N in test_cases:
    result = toggle_bits(N)
    print(f"N = {N} (binary: {bin(N)[2:]}) -> Toggled = {result} (binary: {bin(result)[2:]})")