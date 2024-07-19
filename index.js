const products = [
  {
    name: 'Zapatillas rosewood',
    price: 120,
    stars: 4,
    reviews: 250,
    seller: 'New Balance',
    image:
      'https://img01.ztat.net/article/spp-media-p1/47cc8518376e4a7390e77e651fdf3149/7b8da2b4da1540a6b58e78df81a74cef.jpg?imwidth=300'
  },
  {
    name: 'Sandalias con plataforma-gold',
    price: 38,
    stars: 4,
    reviews: 150,
    seller: 'Anna Field',
    image:
      'https://img01.ztat.net/article/spp-media-p1/e3039908f16045cfbb98cdae58eb5a32/9ec479d7f943455c99e7ca02bd955903.jpg?imwidth=300'
  },
  {
    name: 'Zapatos con plataforma-white',
    price: 44,
    stars: 3,
    reviews: 200,
    seller: 'Anna Field',
    image:
      'https://img01.ztat.net/article/spp-media-p1/1cf6a4b5db7740098780237cdbbca41c/3bcdcbed799e41a88b3de10d43d20642.jpg?imwidth=300&filter=packshot'
  },
  {
    name: 'Alpargatas cognac',
    price: 39,
    stars: 5,
    reviews: 350,
    seller: 'Anna Field',
    image:
      'https://img01.ztat.net/article/spp-media-p1/ae2ebb7b58684404a50c14a3e4eb6b53/e81607aa5d954424993bb2886b734ec8.jpg?imwidth=300&filter=packshot'
  },
  {
    name: 'Alpargatas black',
    price: 35,
    stars: 4,
    reviews: 180,
    seller: 'Anna Field',
    image:
      'https://img01.ztat.net/article/spp-media-p1/a30f74d984d14941906fe92c0bdeea7c/1ee8c6ace20e49b5bc09880291f8bf24.jpg?imwidth=300'
  },
  {
    name: 'Alpargatas natural',
    price: 45,
    stars: 5,
    reviews: 100,
    seller: 'Kamome',
    image:
      'https://img01.ztat.net/article/spp-media-p1/359065aeb68e46aea1172c7aebdc9556/5b1447a6220642ca840cf4a04ca38794.jpg?imwidth=300&filter=packshot'
  },
  {
    name: 'Sandalias de tacón-plomo',
    price: 70,
    stars: 4,
    reviews: 300,
    seller: 'Kamome',
    image:
      'https://img01.ztat.net/article/spp-media-p1/5c19d0e11280457aaa32e2d2a849b459/e8e9d51a9cc3411c830d3cc7e553da17.jpg?imwidth=300&filter=packshot'
  },
  {
    name: 'Zapatillas dark olivine',
    price: 130,
    stars: 2,
    reviews: 50,
    seller: 'New Balance',
    image:
      'https://img01.ztat.net/article/spp-media-p1/1999790b8df84a30941e4278b0aafc43/151ba5278d6d454c800ae9d71a8a385e.jpg?imwidth=300&filter=packshot'
  },

  {
    name: 'Zapatillas Old Skool',
    price: 95,
    stars: 3,
    reviews: 210,
    seller: 'Vans',
    image:
      'https://img01.ztat.net/article/spp-media-p1/ea6144b0dcbc4c808f789f40ca1245de/643e3ed7d358462a8dc5d5a880db32a6.jpg?imwidth=300&filter=packshot'
  },
  {
    name: 'Zapatillas Old Skool multicolor',
    price: 55,
    stars: 2,
    reviews: 50,
    seller: 'Vans',
    image:
      'https://img01.ztat.net/article/spp-media-p1/4e72c98a264e4f5b8725252a6db1fae1/9f2bdcc46b0e4f23897f50a975748666.jpg?imwidth=300&filter=packshot'
  },
  {
    name: 'Zapatillas Old Skool unisex',
    price: 85,
    stars: 4,
    reviews: 150,
    seller: 'Vans',
    image:
      'https://img01.ztat.net/article/spp-media-p1/73514dad253c4dd986aacaf7a03d6874/b7791d57d3004dbbb132f814c00d6b2a.jpg?imwidth=300&filter=packshot'
  },
  {
    name: 'Zapatillas Handball Spezial',
    price: 120,
    stars: 4,
    reviews: 250,
    seller: 'Adidas Originals',
    image:
      'https://img01.ztat.net/article/spp-media-p1/0d20bb1d1e364031b32dd1c6027d5378/0670104e391a4be585befdbdaa9a0972.jpg?imwidth=300&filter=packshot'
  },
  {
    name: 'Zapatillas Gazelle unisex',
    price: 110,
    stars: 3,
    reviews: 70,
    seller: 'Adidas Originals',
    image:
      'https://img01.ztat.net/article/spp-media-p1/9a35165640d94c7993f60cc5254236f0/31cd6aeb3f74476ebcee18ed96cd3ce2.jpg?imwidth=300&filter=packshot'
  },
  {
    name: 'Zapatillas Handball Spezial unisex',
    price: 110,
    stars: 4,
    reviews: 110,
    seller: 'Adidas Originals',
    image:
      'https://img01.ztat.net/article/spp-media-p1/b28d80ad5ca34240902659963c970ac2/721edda671664ad79a1a186141b104cd.jpg?imwidth=300&filter=packshot'
  },

  {
    name: 'Zapatillas maroon almost yellow',
    price: 100,
    stars: 5,
    reviews: 145,
    seller: 'Adidas Originals',
    image:
      'https://img01.ztat.net/article/spp-media-p1/c6772caa58b8433aa34a75578eaca6d9/98c8aae80c3548168efbb092dc4b69fd.jpg?imwidth=300&filter=packshot'
  },
  {
    name: 'Zapatillas clear yellow',
    price: 150,
    stars: 2,
    reviews: 100,
    seller: 'New Balance',
    image:
      'https://img01.ztat.net/article/spp-media-p1/95e428b7e17c409ca060ed69bdcc4ccf/aaad577ce7bc4a0faefe97e004fe7ff7.jpg?imwidth=300&filter=packshot'
  },
  {
    name: 'Sandalias de tacón',
    price: 140,
    stars: 5,
    reviews: 125,
    seller: 'Steve Madden',
    image:
      'https://img01.ztat.net/article/spp-media-p1/fce080ab6bb445179ea557deff5fdb26/6e5678f83ad0455a9059a96d0beb23be.jpg?imwidth=300&filter=packshot'
  },
  {
    name: 'Sandalias de tacón Transpire',
    price: 120,
    stars: 3,
    reviews: 200,
    seller: 'Steve Madden',
    image:
      'https://img01.ztat.net/article/spp-media-p1/920da6e8d3fb400a92d08e277f3009aa/f77b6829f71f42c1b6053290e4c426f2.jpg?imwidth=300&filter=packshot'
  },
  {
    name: 'Sandalias de tacón Blush',
    price: 79,
    stars: 4,
    reviews: 300,
    seller: 'Steve Madden',
    image:
      'https://img01.ztat.net/article/spp-media-p1/1810e2f9deb44ba7938197316be2c71c/2728f719487a4d4fa0e18004f7aadc5e.jpg?imwidth=300&filter=packshot'
  },
  {
    name: 'Sandalias de tacón Oro',
    price: 50,
    stars: 2,
    reviews: 220,
    seller: 'Kamome',
    image:
      'https://img01.ztat.net/article/spp-media-p1/1f25feee5b20470983f668aef1c0c159/3351d5dbfb4243eb8f68190031c03484.jpg?imwidth=300&filter=packshot'
  }
]
const suggestedProducts = [
  {
    name: 'Sandalias Black',
    price: 175,
    stars: 3,
    reviews: 160,
    seller: 'Michael Kors',
    image:
      'https://img01.ztat.net/article/spp-media-p1/8ce4a01aafb442379840c5c4b3cd6ea6/9a2e8f4aa53642b2865d7a8aaac55c6c.jpg?imwidth=300&filter=packshot'
  },

  {
    name: 'Zapatillas white/light-brown',
    price: 155,
    stars: 4,
    reviews: 350,
    seller: 'Air Jordan',
    image:
      'https://img01.ztat.net/article/spp-media-p1/41a4606386d04061ab573025472c0ca0/1d3e88fe56954510bb6c7cedd5105bef.jpg?imwidth=300&filter=packshot'
  },
  {
    name: 'Sandalias multi-coloured',
    price: 34,
    stars: 5,
    reviews: 500,
    seller: 'Even&Odd',
    image:
      'https://img01.ztat.net/article/spp-media-p1/aced272c52f14b7d933159b09814d1ee/fd27f4d24c754766867f19388451a2ab.jpg?imwidth=300&filter=packshot'
  },
  {
    name: 'Sandalias con plataforma',
    price: 155,
    stars: 2,
    reviews: 30,
    seller: 'Alma en Pena',
    image:
      'https://img01.ztat.net/article/spp-media-p1/a5bb6cba6e284503a9831bef4a8289b4/065b68edc1804a3c816b68108cb1216a.jpg?imwidth=300&filter=packshott'
  },
  {
    name: 'Sandalias Navy',
    price: 30,
    stars: 3,
    reviews: 325,
    seller: 'Marco Tozzi',
    image:
      'https://img01.ztat.net/article/spp-media-p1/ce106b93d6ed44fdb7ff467170f7e89a/8ad767753e05494fbf602372b4b2a377.jpg?imwidth=300&filter=packshot'
  },
  {
    name: 'Sandalias de tacón -camel',
    price: 180,
    stars: 5,
    reviews: 100,
    seller: 'Carmela',
    image:
      'https://img01.ztat.net/article/spp-media-p1/e443495ebe994119b4fbc55fd4aa3188/5d217ffdb38f4994acaa25e922e03be7.jpg?imwidth=300&filter=packshot'
  }
]

const title = document.createElement('h1')
title.textContent = 'Mis Zapatos Online'
document.body.appendChild(title)

const printShoes = (shoes) => {
  const divProducts = document.querySelector('.products')
  divProducts.innerHTML = ''

  for (const shoe of shoes) {
    const divProduct = document.createElement('div')
    divProduct.classList.add('products')
    const divImg = document.createElement('div')
    divImg.classList.add('img')
    const img = document.createElement('img')
    img.src = shoe.image
    img.alt = shoe.name
    const nameProduct = document.createElement('h3')
    nameProduct.textContent = shoe.name
    const priceProduct = document.createElement('p')
    priceProduct.textContent = `${shoe.price}€`
    const seller = document.createElement('p')
    seller.textContent = shoe.seller
    seller.classList.add('seller')
    const divStars = document.createElement('div')
    divStars.classList.add('stars')

    for (let i = 1; i <= 5; i++) {
      const star = document.createElement('div')
      star.className = 'star'
      if (i <= shoe.stars) {
        star.classList.add('full')
      }
      divStars.appendChild(star)

      document.body.appendChild(divProducts)
      divProducts.appendChild(divProduct)
      divProduct.appendChild(divImg)
      divImg.appendChild(img)
      divProduct.appendChild(nameProduct)
      divProduct.appendChild(priceProduct)
      divProduct.appendChild(seller)
      divProduct.appendChild(divStars)
    }
  }
}
printShoes(products)

let seller = ''
const shoesSeller = []

const fillSellers = (products) => {
  shoesSeller.splice(0)
  for (const shoe of products) {
    if (!shoesSeller.includes(shoe.seller)) {
      shoesSeller.push(shoe.seller)
    }
  }
}
fillSellers(products)

const filterProducts = (brandSelect, priceInput) => {
  brandSelect = document.querySelector('.select').value
  priceInput = document.querySelector('.number').value

  const filteredBrands = products.filter((shoe) => {
    const brandMatch = brandSelect ? brandSelect === shoe.seller : true
    const priceMatch = priceInput ? priceInput >= shoe.price : true
    return brandMatch && priceMatch
  })

  if (filteredBrands.length > 0) {
    printShoes(filteredBrands)
  } else {
    alert('Productos no encontrados, productos sugeridos:')
    printShoes(suggestedProducts)
  }

  document.querySelector('.number').value = ''
}

const createFilters = () => {
  const divFilter = document.querySelector('.filter')
  const select = document.createElement('select')
  select.classList.add('select')
  for (seller of shoesSeller) {
    const option = document.createElement('option')
    option.value = seller
    option.textContent = seller
    divFilter.appendChild(select)
    select.appendChild(option)
  }

  select.addEventListener('change', filterProducts)

  const divInput = document.createElement('div')
  divInput.classList.add('input')
  let input = document.createElement('input')
  input.type = 'number'
  input.classList.add('number')
  input.placeholder = 'Filtrar por precio'
  const button = document.createElement('button')
  button.classList.add('button')
  button.textContent = 'Buscar'

  divFilter.appendChild(divInput)
  divInput.appendChild(input)
  divInput.appendChild(button)

  button.addEventListener('click', filterProducts)
}

createFilters()

const createButtonCleaner = () => {
  const divFilter = document.querySelector('.filter')
  const buttonCleaner = document.createElement('button')
  buttonCleaner.textContent = 'Limpiar Filtros'
  buttonCleaner.classList.add('cleaner')
  divFilter.appendChild(buttonCleaner)

  buttonCleaner.addEventListener('click', () => {
    const divProducts = document.querySelector('.products')
    divProducts.innerHTML = ''

    printShoes(products)
  })
}
createButtonCleaner()
