import {Menu} from "./Menu";
import {MenuItem} from "./MenuItem";
import {Waitress} from "./Waitress";

function main() {
    const pancakeHouseMenu = new Menu('PANCAKE HOUSE MENU', 'Breakfast');
    const dinnerMenu = new Menu('DINNER MENU', 'Launch');
    const cafeMenu = new Menu('CAFE MENU', 'Dinner');
    const desertMenu = new Menu('DESERT MENU', 'Desert of course!');

    const allMenus = new Menu('ALL MENUS', 'All menus combined');

    allMenus.add(pancakeHouseMenu);
    allMenus.add(dinnerMenu);
    allMenus.add(cafeMenu);

    pancakeHouseMenu.add(new MenuItem("K&B's Pancake Breakfast",
        "Pancakes with scrambled eggs and toast",
        true,
        2.99));
    pancakeHouseMenu.add(new MenuItem("Regular Pancake Breakfast",
        "Pancakes with fried eggs, sausage",
        false,
        2.99));
    pancakeHouseMenu.add(new MenuItem("Blueberry Pancakes",
        "Pancakes made with fresh blueberries",
        true,
        3.49));
    pancakeHouseMenu.add(new MenuItem("Waffles",
        "Waffles with your choice of blueberries or strawberries",
        true,
        3.59));

    dinnerMenu.add(new MenuItem("Vegetarian BLT",
        "(Fakin') Bacon with lettuce & tomato on whole wheat", true, 2.99
    ));
    dinnerMenu.add(new MenuItem("BLT",
        "Bacon with lettuce & tomato on whole wheat", false, 2.99
    ));
    dinnerMenu.add(new MenuItem("Soup of the day",
        "Soup of the day, with a side of potato salad", false, 3.29
    ));
    dinnerMenu.add(new MenuItem("Hot dog",
        "A hot dog, with sauerkraut, relish, onions, topped with cheese", false, 3.05
    ));
    dinnerMenu.add(desertMenu);

    cafeMenu.add(new MenuItem("Veggie Burger and Air Fries",
        "Veggie burger on a whole wheat bun, lettuce, tomato, and fries",
        true, 3.99));
    cafeMenu.add(new MenuItem("Soup of the day",
        "A cup of the soup of the day, with a side salad",
        false, 3.69));
    cafeMenu.add(new MenuItem("Burrito",
        "A large burrito, with whole pinto beans, salsa, guacamole",
        true, 4.29));

    desertMenu.add(new MenuItem(
        "Apple Pie",
        "Apple pie with a flaky crust, topped with vanilla ice cream",
        true,
        1.59));

    const waitress = new Waitress(allMenus);
    waitress.printMenu();
}

main();
