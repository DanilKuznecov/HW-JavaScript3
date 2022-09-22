console.log('Задание: "a"');


do{
    var a = +prompt('Введите число')    
}while(isNaN(a) || a == 0) {
    console.log(a);
};


let b = +prompt('Введите степень');
isNaN(b) || b === 0 ? b = 2 : console.log(b); 



for(let i = 0; i <= b; i++ ) {
    res = a ** b
    alert(res)
    console.log(res);
    break;
};





console.log('Задание: "с"');

do{
    var x = +prompt('Количество');
}while(isNaN(x) || x <= 0) {
    x == 5
}

do{
    var y = prompt('Символ отступов');
}while(y == ' ')

do{
    var z = prompt('Конечный символ');
}while(z == ' ')


for(let i = 0; i <= x; i++) {
    z = i == 0 ? z : y + z
    console.log(z);
}








