recovery_students = []
with open("file.txt", "r") as grade_lines:
    for line in grade_lines:
        if int(line.split(" ")[1]) < 6:
            recovery_students.append(line.split(" ")[0])

for student in recovery_students:
    print(student)
