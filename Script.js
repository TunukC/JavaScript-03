const userName = 'Ana';
console.log(userName.slice(0, 1).toUpperCase() + userName.slice(1).toLowerCase());
let money = '$120';
console.log(money.slice(1));

let userNameInput  = prompt("Здравствуй, я компьютер, а тебя как зовут?");
let userName2 = userNameInput.slice(0, 1).toUpperCase() + userNameInput.slice(1).toLowerCase();
let userAge = prompt(`Очень приятно, ${userName}, Сколько тебе лет?`);
alert(`Ого! Тебе уже ${userAge}!`);


document.write(`<h3>компьютер: <i>Здравствуй, я компьютер, а тебя как зовут?</i> </h3>`);
document.write(`<h3>Пользователь:<i>${userName}</i>`);
document.write(`<h3>Компьютер:<i>очень приятно,${userName}, Сколько тебе лет ?</i></h3>`);
document.write(`<h3>Пользователь: <i>${userAge}</i></h3>`);
document.write(`<h3>Компьютер: <i>Ого! Тебе уже ${userAge}</i></h3>`);

let usercard = prompt(`${userName}, Номер вашей карты`);

usercard  = document.write(`<h3>${userName},Номер вашей карты: <i>${usercard.replace(usercard.slice(0, 12), '**********')}</i></h3>`);




