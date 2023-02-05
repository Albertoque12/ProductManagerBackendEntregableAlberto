const libro =   {title: "Cien años de soledad", description: "Realismo mágico", price: 350, thumbnail: "image1", code: 1667, stock: 10 }
const ropa = {title: "Pantalón", description: "Rojos", price: 200, thumbnail: "image2", code: 1668, stock: 3 }
const juguete = {title: "Pelota", description: "Pequeña", price: 500, thumbnail: "image3", code: 1669, stock: 5 }


class ProductManager {
    static id = 0
    constructor(title, description, price, thumbnail, code, stock){
        this.products = []
        this.product = {title, description, price, thumbnail, code, stock}
        this.title = title
        this.description = description
        this.price = price
        this.thumbnail = thumbnail
        this.code = code
        this.stock = stock

    }

    getProducts(){
        return this.products
    }

    addProduct(product){
        if(this.getProducts().find((produ) => produ.code == product.code)) return console.log(`Product with code: ${product.code} already exists`)
        else product.id = this.getProducts().length + 1
        this.products.push(product)
    }

    getProductById(id){
        const found = this.getProducts().find((product) => product.id == id)
        if(found) return console.log(found) 
        else console.log("Product not found")
    }

}

producto1 = new ProductManager()



console.log(producto1.addProduct(libro))
console.log(producto1.addProduct(ropa))
console.log(producto1.addProduct(ropa))

console.log(producto1.getProducts())
console.log(producto1.getProductById(2))

