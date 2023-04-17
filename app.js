class Product {
    constructor(title, price, description, image) {
        this.title = title
        this.price = price
        this.description = description
        this.image = image
    }
}
let arr = []
fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {
        for (let i = 0; i < 20; i++) {
            let productData = data[i]
            let product1 = new Product(
                productData.title,
                productData.price,
                productData.description,
                productData.image
            )
            arr.push(product1)
        }

        arr.map(product1 => {

            let main = document.getElementById('grid')
            let card = document.createElement('div')
            let tit = document.createElement('h4')
            let pri = document.createElement('span')
            let des = document.createElement('p')
            let img = document.createElement('img')
            img.src = product1.image
            tit.textContent = product1.title
            pri.textContent = "Price" + " " + product1.price
            des.textContent = product1.description
            main.appendChild(card)
            card.appendChild(img)
            card.appendChild(tit)
            card.appendChild(pri)
            card.appendChild(des)



        })




    }






    )

// // //GET
// fetch('https://jsonplaceholder.typicode.com/posts/1')
// .then(response => response.json())
// .then(post => console.log(post))
// .catch(error => console.error('Error fetching post:', error));

// //PUT
// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//   method: 'PUT',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     title: 'My Title',
//     body: 'My Body'
//   })
// })
// .then(response => {
//   if (response.ok) {
//     console.log('Post updated successfully');
//   } else {
//     console.error('Error updating post');
//   }
// })
// .catch(error => console.error('Error updating post:', error));


// //DELETE
// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//   method: 'DELETE'
// })
// .then(response => {
//   if (response.ok) {
//     console.log('Post deleted successfully');
//   } else {
//     console.error('Error deleting post');
//   }
// })
// .catch(error => console.error('Error deleting post:', error));


// //GET
// fetch('https://jsonplaceholder.typicode.com/posts/1')
// .then(response => response.json())
// .then(post => console.log(post))
// .catch(error => console.error('Error fetching post:', error));