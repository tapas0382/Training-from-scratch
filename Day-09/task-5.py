# Student analyzer mini project
students = [
    {"name": "A", "marks": 78},
    {"name": "B", "marks": 92},
    {"name": "C", "marks": 65},
    {"name": "D", "marks": 88},
    {"name": "E", "marks": 54},
    {"name": "F", "marks": 34}
]

if students:
    s = 0
    avg = 0
    highest = students[0]["marks"]
    highest_name = students[0]["name"]
    lowest = students[0]["marks"]
    lowest_name = students[0]["name"]
    passed = 0
    failed = 0
    
    for student in students:
        s += student['marks']

        if highest <= student['marks']:
            highest = student['marks']
            highest_name = student["name"]
        if lowest >= student['marks']:
            lowest = student['marks']
            lowest_name = student["name"]

        if student["marks"] >= 40:
            passed += 1
        else:
            failed += 1

    avg = s / len(students)

    print(f'The number of students is {len(students)} and average marks is {avg}')
    print(f"The highest marks is {highest} and lowest marks is {lowest}")
    print(f"Number of student passed is {passed} and failed is {failed}")
    print(f"The name of the student with highest marks is {highest_name} and lowest marks is {lowest_name}")
else:
    print("No student data available")