list = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]


def getSmallest(list):
    smallest = list[0]
    for number in list:
        if number < smallest:
            smallest = number
    return smallest


print(getSmallest(list))
