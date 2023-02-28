let age = prompt ("Ваш рік народження?");
let city = prompt ("В якому місті ви живете?");
let sport = prompt ("Ваш улюблений вид спорту?");
let userAgeMessage, userCityMessage, userSportMessage

if (age === null) {
    userAgeMessage = "Шкода, що Ви не захотіли ввести свій вік"
} else {
    userAgeMessage = "Ваш вік: " + (2023 - age);
}

switch (city) {
    case "Київ":
        userCityMessage = ("Ви живете у столиці: України");
        break;
    case "Вашингтон":
        userCityMessage = ("Ви живете у столиці: США");
        break;
    case "Лондон":
        userCityMessage = ("Ви живете у столиці: Англії");
        break;
    case null:
        userCityMessage = ("Шкода, що Ви не захотіли ввести своє місто")
        break;
    default:
        userCityMessage = ("Ви живете у місті: " + city)
}

switch (sport) {
    case "Бокс":
        userSportMessage = ("Круто! Хочеш стати як: Олександр Усик?");
        break;
    case "Фехтування":
        userSportMessage = ("Круто! Хочеш стати як: Катерина Чорній?");
        break;
    case "Шахи":
        userSportMessage = ("Круто! Хочеш стати як: Андрій Волокитін?");
        break;
    case null:
        userSportMessage = ("Шкода, що Ви не захотіли ввести свій улюблений спорт")
        break;
    default:
        userSportMessage = ("Ваш улюблений спорт: " + sport)
}

alert (userAgeMessage + "\n" +  userCityMessage + "\n" +   userSportMessage)