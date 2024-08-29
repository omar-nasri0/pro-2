const products = [
  {
    id: 0,
    image: './assets/img/product-1.jpg',
    title: 'Red T-Shirt',
    price: 120,
  },
  {
    id: 1,
    image: './assets/img/product-2.jpg',
    title: 'Sport sneakers',
    price: 100,
  },
  {
    id: 2,
    image: './assets/img/product-3.jpg',
    title: ' Colorful socks',
    price: 20,
  },
  {
    id: 3,
    image: './assets/img/product-4.jpg',
    title: 'Sport Watch',
    price: 20,
  },
]
localStorage.setItem('product', JSON.stringify(products))

// fetch('https://fakestoreapi.com/products?limit=6')
//   .then((res) => res.json())
//   .then((data) => {
//     localStorage.setItem('product', JSON.stringify(data))
//   })
