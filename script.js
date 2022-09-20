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



