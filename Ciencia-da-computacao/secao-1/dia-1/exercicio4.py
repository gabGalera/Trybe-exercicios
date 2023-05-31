def biggerName(list):
    biggerName = ""
    for name in list:
        if len(name) > len(biggerName):
            biggerName = name
    return biggerName


print(biggerName(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]))
