import cartTpl from './cartTpl.hbs'
import {products} from './cart.js'

const listRef = document.querySelector('.products-list')


const cartMarkup = cartTpl(products)

listRef.insertAdjacentHTML('beforeend', cartMarkup)
