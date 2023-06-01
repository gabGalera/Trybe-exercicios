def fizzBuzz(n):
    payload = []
    for number in range(1, n + 1):
        if number % 3 == 0 and number % 5 == 0:
            payload.append("FizzBuzz")
        elif number % 3 == 0:
            payload.append("Fizz")
        elif number % 5 == 0:
            payload.append("Buzz")
        else:
            payload.append(number)
    print(payload)
    return payload
