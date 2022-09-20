/* console.log('Задание: "a"'); */


do{
    var a = +prompt('Введите число')    
}while(isNaN(a) || a == 0);    




let b = +prompt('Введите степень')
do{
    b = 2
}while(isNaN(b) || b == 0);




for(let i = 1; i <= b; i++ ) {
    res = a ** b
    alert(res)
    break;
};

