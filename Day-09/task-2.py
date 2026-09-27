def grade_check(marks):
    if 90 <= marks <= 100:
        print("Excellent")

    elif 75 <= marks <= 89:
        print("Very Good")

    elif 60 <= marks <= 74:
        print("Good")

    elif 40 <= marks <= 59:
        print("Pass")

    elif 0 <= marks < 40:
        print("Fail")

    else:
        print("Invalid marks")

test_case = [39, 40, 74, 75, 89, 90, 100, -5, 150]

for marks in test_case:
    grade_check(marks)