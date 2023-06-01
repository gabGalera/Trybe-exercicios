valores = input("Digite números naturais separados por espaços: ")

list_valores = valores.split(" ")

sum = 0
for valor in list_valores:
    if not valor.isdigit():
        sum = f"Erro ao somar valores, {valor} é um valor inválido"
        break
    sum += float(valor)
print(sum)
