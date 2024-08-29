let product = JSON.parse(localStorage.getItem('product'))
let cart = JSON.parse(localStorage.getItem('cartDB')) || []
let cartDB = localStorage.setItem('cartDB', JSON.stringify(cart))
let root = document.getElementById('root')
let cartItem = document.getElementById('cartItem')

// ! Display Products

const displayProducts = () => {
  root.innerHTML = product
    .map((item) => {
      var { image, title, price, id } = item

      return (
        `<div class='box'>
    <div class='img-box'>
      <img class='images' src=${image}></img>
    </div>
    <div class='bottom'>
      <p>${title}</p>
      <h2>$ ${price}</h2>` +
        "<button onclick='addToCart(" +
        id +
        ")'>Add to cart </button>" +
        `</div>
    </div>`
      )
    })
    .join('')
}

// function deleteItem(id) {
//   return product.filter((item) => item.id === id)
// }
// console.log(deleteItem(2))
// ! Add product to cart

const addToCart = (id) => {
  cart.push({ ...product[id] })
  localStorage.setItem('cartDB', JSON.stringify(cart))
  console.log(JSON.parse(localStorage.getItem('cartDB')))
  displayCart()
}

// ! remove product from cart

const delElement = (j) => {
  cart.splice(j, 1)
  localStorage.setItem('cartDB', JSON.stringify(cart))
  displayCart()
}

// ! Display cart

const displayCart = () => {
  let total = 0,
    j = 0

  // * Display Product Count

  document.getElementById('count').innerHTML = JSON.parse(
    localStorage.getItem('cartDB')
  ).length

  document.getElementById('total').innerHTML = `$ ${total}`

  // *

  // * Check if the cart is empty Or display the cart content from local storage

  if (cart.length == 0) {
    cartItem.innerHTML = 'Your cart is empty'
  } else {
    cartItem.innerHTML = JSON.parse(localStorage.getItem('cartDB'))
      .map((items) => {
        var { image, title, price } = items

        // * Total Price

        total = total + price
        document.getElementById('total').innerHTML = `$ ${total}`
        console.log(j)

        // *
        return (
          `<div class='cart-item'>
            <div class='row-img'>
              <img class='rowImg' src= ${image}>
            </div>
            <p style='font-size:12px'>${title}</p>
            <h2 style='font-size:15px'>$ ${price}</h2>` +
          "<i class= 'fa-solid fa-trash' onclick='delElement(" +
          j++ +
          ")'></i></div>"
        )
      })
      .join('')
  }
}
displayProducts()
displayCart()
