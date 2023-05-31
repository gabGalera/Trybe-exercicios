def triangles(side1, side2, side3):
    if side1 + side2 < side3 or side1 + side3 < side2 or side3 + side2 < side1:
        return "Não é um trianglo"
    if side1 == side2 and side2 == side3:
        return "Equilátero"
    elif side1 == side2 or side2 == side3 or side1 == side3:
        return "Isósceles"
    else:
        return "Escaleno"


print(triangles(10, 12, 30))
print(triangles(10, 10, 10))
print(triangles(10, 12, 10))
print(triangles(11, 12, 10))
