// На рахунку користувача є 23580 кредитів, значення зберігається в змінній credits (створи і привласни). 
// Користувач вирішує купити ремонтних дроїд, які коштують по 3000 кредитів за штуку. 
// Ціна одного дроїда зберігається в змінній pricePerDroid (створи і привласни).

// При відвідуванні сторінки, використовуючи prompt, 
// необхідно запитати кількість дроїдів, які користувач хоче купити і зберегти в змінну.

// Напиши скрипт який:

// Якщо в prompt була натиснута кнопка Cancel, виводить в консоль повідомлення 'Скасовано користувачем!'.
// В іншому випадку, розраховує загальну ціну замовлення і зберігає в змінній totalPrice.
// Перевіряє чи зможе користувач оплатити замовлення:
// якщо сума до оплати перевищує кількість кредитів на рахунку,
//  виводь в консоль повідомлення 'Недостатньо коштів на рахунку!'.
// в іншому випадку необхідно порахувати залишок кредитів на рахунку 
// і вивести повідомлення 'Ви купили [число] дроїдів, на рахунку залишилося [число] кредитів.'.

const credits=23580
const pricePerDroid= 3000
let userOrder = prompt('Вкажіть кількість дроїдів, яку Ви бажаєте придбати')
let totalPrice = userOrder*pricePerDroid
if (userOrder!==null){
 if(!isNaN(userOrder)){
    if(totalPrice>credits){
        alert ('Недостатньо коштів на рахунку!')
    }else{
        let userBalance = credits-totalPrice
        alert(`Ви купили ${userOrder} дроїдів, на рахунку залишилося ${userBalance} кредитів.`)
    }
 }else{alert('Введіть, будь ласка, число')}
}else{alert('Скасовано користувачем!')}