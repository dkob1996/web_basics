const degreesСelsius = Number.parseInt(prompt("Введите градусы по цельсию цифрой: "));

const degreesFahrenheit = Math.floor((((9 / 5) * degreesСelsius) + 32) * 100) /100;

alert(`Цельсий: ${degreesСelsius}, Фаренгейт: ${degreesFahrenheit}`);