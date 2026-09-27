# list
my_list = ['apple', 'orange', 'water melon', 'grapes']
print(my_list)
my_list.append('banana')
print("list after append banana:", my_list)
my_list.remove('grapes')
print('list after removing grapes: ', my_list)
my_list.pop()
print('list after popping: ', my_list)

# Tuple
my_tuple = ('laptop', 1, "monitor", 2, True)
print(my_tuple)
print(f'The first item of the my tuple is: {my_tuple[0]}')
# my_tuple[1] = 0       # Tuples are immutable
# print(f"after changing the first value of my tuple: {my_tuple[0]}")

# set
my_set = {1, 2, 3, 3}
print(my_set)

# dictionary
my_dictionary = {
    'username': 'tapas2610',
    'password': 26102610,
    'dob': '26 oct 2003' 
}
print(my_dictionary)
my_dictionary['password'] = 'Tapas@2610'
print('After changing the password:', my_dictionary)

# Loop through keys only
print("Keys:")
for key in my_dictionary:
    print(key)

# Loop through values only
print("Values:")
for value in my_dictionary.values():
    print(value)

# Loop through keys AND values together
print("Key-Value pairs:")
for key, value in my_dictionary.items():
    print(key, "->", value)