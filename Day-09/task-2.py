def grade_check(marks):
    if 90 <= marks <= 100:
        return "Excellent"

    elif 75 <= marks <= 89:
        return "Very Good"

    elif 60 <= marks <= 74:
        return "Good"

    elif 40 <= marks <= 59:
        return "Pass"

    elif 0 <= marks < 40:
        return "Fail"

    else:
        return "Invalid marks"

test_case = [39, 40, 74, 75, 89, 90, 100, -5, 150]

for marks in test_case:
    print(grade_check(marks))