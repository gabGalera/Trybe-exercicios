import math


def paintQtyAndPrice(meters):
    litersByMeters = 1 / 3
    totalLitersNeeded = meters * litersByMeters
    qty = math.ceil(totalLitersNeeded / 18)
    totalPrice = qty * 80
    return (qty, totalPrice)


print(paintQtyAndPrice(200))
