def minimumCoins(value):
    payload = []
    actual = 0
    while actual != value:
        if actual + 100 < value:
            actual = actual + 100
            payload.append(100)
        elif actual + 50 < value:
            actual = actual + 50
            payload.append(50)
        elif actual + 25 < value:
            actual = actual + 25
            payload.append(25)
        elif actual + 10 < value:
            actual = actual + 10
            payload.append(10)
        elif actual + 5 < value:
            actual = actual + 5
            payload.append(5)
        else:
            actual = actual + 1
            payload.append(1)
    return payload


result = minimumCoins(67)
print(result)
