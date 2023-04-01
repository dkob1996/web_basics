const name = prompt("Как вас зовут?");


function greeting(name_tmp) {
    if (name_tmp != null) {
        return `Здравствуй, ${name_tmp}`;
    } else {
        return `Здравствуй, незнакомец!`
    }
}

console.log(greeting(name));