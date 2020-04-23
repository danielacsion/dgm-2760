//let message

const pizza = {
  crust: 'thin',
  size: 'small',
  topping: 'pepperoni',
  buildPizza: function() {
    console.log('buildPizza method has been called')
    message = `Baking a pizza on a ${pizza.crust} crust with a topping of ${pizza.topping} and chesse for you!`
    document.querySelector('#feedback').textContent = message
  },
  shoppingList: () => {
    console.log('shoppingList method has been called')
    let flour = 1
    if (pizza.crust === 'thick') flour *= 2
    if (pizza.size === 'large') flour *= 2
    message = `You will need to purchase ${flour} cups of flour and 1 lb of ${pizza.topping}.`
    document.querySelector('#feedback').innerHTML = message
  }
}

// can replace function() with () => for return
document.querySelector('#thin').addEventListener('click', () => pizza.crust = 'thin')
document.querySelector('#thick').addEventListener('click', () => pizza.crust = 'thick')

document.querySelector('#sausage').addEventListener('click', () => pizza.topping = 'sausage')
document.querySelector('#pepperoni').addEventListener('click', () => pizza.topping = 'pepperoni')

document.querySelector('#small').addEventListener('click', () => pizza.size = 'small')
document.querySelector('#large').addEventListener('click', () => pizza.size = 'large')

// drop the arrow function as you are already returning a function
document.querySelector('#build').addEventListener('click', pizza.buildPizza)

document.querySelector('#shopping').addEventListener('click', pizza.shoppingList)
