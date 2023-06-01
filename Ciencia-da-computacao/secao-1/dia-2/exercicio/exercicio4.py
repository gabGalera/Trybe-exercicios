import json
import csv
from collections import Counter

with open("exercicio4.json") as file:
    content = file.read()
    books = json.loads(content)

booksCat = []

for book in books:
    payload = book["categories"]
    for pay in payload:
        booksCat.append(pay)

categories, values = zip(*Counter(booksCat).most_common())
values = [*values]
categories = [*categories]
payload = []

for index in range(len(values)):
    payload.append([categories[index], round(values[index] / sum(values), 5)])

with open("report.csv", "w") as file:
    writer = csv.writer(file)
    writer.writerow(["category", "percentual"])
    writer.writerows(payload)
