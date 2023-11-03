import { createElement } from "./app/utils/createElement"

import { loadHeader } from "./app/header"
import { loadHomeModule } from "./app/home-module"
import { loadMenuModule } from "./app/menu-module"
import "./SCSS/style.scss"

loadHeader()
const main = createElement('main')
document.querySelector('#content').append(main)
loadMenuModule()