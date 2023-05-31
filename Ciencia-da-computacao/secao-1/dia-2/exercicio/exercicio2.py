import random

words_list = ["jabuticaba", "otorinolaringologista", "honomatopéia"]


def scramble():
    random_word = random.choice(words_list)
    scrambled_word = "".join(random.sample(random_word, len(random_word)))

    print(scrambled_word)
    numberOfTries = 1
    while numberOfTries < 4:
        payload = input("Digite a palavra que você acha que é: ")
        if payload == random_word:
            print("Parabéns, Você acertou!")
            break
        elif numberOfTries == 3:
            print("Você perdeu")
            break
        else:
            numberOfTries += 1


scramble()
