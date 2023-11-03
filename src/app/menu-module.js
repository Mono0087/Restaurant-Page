import { createElement } from "./utils/createElement"
import { createDish } from "./utils/createDish"
import bliny from "../assets/img/dishes/bliny.jpg"
import borsht from "../assets/img/dishes/borsht.jpg"
import salad from "../assets/img/dishes/salad.jpg"

export function loadMenuModule() {
    const main = document.querySelector('main')
    const menu = createElement('div', null, 'menu')
    const h2 = createElement('h2', null, null, 'Menu')
    const menuContainer = createElement('div', null, 'dishes-container')
    const dishes = [{ name: 'Bliny', cost: 100, img: bliny }, { name: 'Borsht', cost: 200, img: borsht }, { name: 'Salad', cost: 200, img: salad }]
    dishes.forEach(dish => {
        menuContainer.append(createDish(dish.name, dish.cost, dish.img))
    });


    menu.append(h2, menuContainer)
    main.append(menu)
}