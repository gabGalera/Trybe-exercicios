def listMean(list):
    sum = 0
    for number in list:
        sum = sum + number
    mean = sum / len(list)
    return mean


print(listMean([1, 4, 3]))
