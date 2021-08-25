import faker from 'faker'

const cartText = `<div>You have ${faker.datatype.number()} items in your cart</div>`

document.querySelector('#dev-cart').innerHTML = cartText

// Context/Situation #1
// We are running this file in development in isolation
// We are using our local index.html file
// Which DEFINITELY has an element with an id of 'dev-cart'
// We want to inmediatly render our app into that element

// Context/Situation #2
// We are running this file in development or production
// through the CONTAINER app
// NO GUARANTEE that an element with an id of 'dev-cart'
// WE DO NOT WANT try to inmediatly render the app
