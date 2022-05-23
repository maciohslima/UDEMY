function rand({ min = 0, max = 1000 }) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

for (let i = 1; i <= 5; i++) {
    const obj = { max: 50, min: 40 }
    console.log("Saída", i, "=", rand(obj));
}

console.log(rand({ min: 955 }));
console.log(rand({}));