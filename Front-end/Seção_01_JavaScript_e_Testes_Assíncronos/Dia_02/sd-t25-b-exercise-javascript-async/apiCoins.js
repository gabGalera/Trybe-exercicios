const fetchCoins = async () => {
    const url = 'https://api.coincap.io/v2/assets';
    const coins = await fetch(url)
        .then((response) => response.json())
        .then((data) => data.data);
    let arr = [];
    coins.forEach((e) => {
        const valor = parseFloat(e.priceUsd).toFixed(2);
        arr.push(`${e.name} (${e.symbol}): ${valor}`);
    });
    arr = arr.slice(0, 10);
    arr.forEach((e) => {
        const li = document.createElement('li');
        li.innerText = e;
        document.getElementById('coins-list').appendChild(li);
    });
};

fetchCoins();