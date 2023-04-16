let title = document.getElementById('title')
let price = document.getElementById('price')
let description = document.getElementById('desc')
let image = document.getElementById('imgg')
function Product(title, price, description, image) {
    this.title = title
    this.price = price
    this.description = description
    this.image = image
}
fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(prod => {
        let arr = []
        for (let i = 0; i < 20; i++) {
            let productdata = arr[i]
            let product1 = new Product(title, price, description, image)
            arr.push(product1)

        }
    })