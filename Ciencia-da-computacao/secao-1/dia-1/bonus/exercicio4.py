def totalPrice(liters, type):
    if liters > 20 and type == "A":
        return liters * 1.9 * (1 - 0.05)
    elif liters <= 20 and type == "A":
        return liters * 1.9 * (1 - 0.03)
    elif liters > 20 and type == "G":
        return liters * 2.5 * (1 - 0.06)
    else:
        return liters * 2.5 * (1 - 0.04)


print(totalPrice(100, "A"))
