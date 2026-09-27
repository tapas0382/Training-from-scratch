# print numbers from 1 to 100
for i in range(1, 101):
    print(i)

# print even numbers from 1 to 100
j = 1
while 1 <= j <= 100:
    if j % 2 == 0:
        print(j)
    j += 1

# calculate the sum of the numbers from 1 to 100
s = 0
for k in range(1, 101):
    s += k
print("Sum from 1 to 100 is: ", s)

# multiplication table for n = 7
def multiplication_table(n):
    for m in range(1, 11):
        print(f"{m} x {n} = {n * m}")
multiplication_table(7)

# find largest va;ue below
def find_large(arr):
    max = arr[0]
    for num in arr:
        if max <= num:
            max = num

    print("The largest value is: ", max)

find_large([12, 45, 7, 89, 23, 56, 3])