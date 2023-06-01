from exercicio5 import fizzBuzz


def test_if_three_returns_fizz():
    "Testa se o 3 retorna Fizz"
    assert fizzBuzz(7)[2] == "Fizz"


def test_if_five_returns_buzz():
    "Testa se o 5 retorna Buzz"
    assert fizzBuzz(7)[4] == "Buzz"


def test_if_nine_returns_fizz():
    "Testa se o 9 retorna Fizz"
    assert fizzBuzz(15)[8] == "Fizz"


def test_if_ten_returns_buzz():
    "Testa se o 10 retorna Buzz"
    assert fizzBuzz(15)[9] == "Buzz"


def test_if_fifteen_returns_fizzBuzz():
    "Testa se o 15 retorna FizzBuzz"
    assert fizzBuzz(15)[14] == "FizzBuzz"
