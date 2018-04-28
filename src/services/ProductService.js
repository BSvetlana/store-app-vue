
const products = [
    {id: 1, title: 'Computer', quantity: 3},
    {id: 2, title: 'Keyboard', quantity: 4},
    {id: 3, title: 'Monitor', quantity: 7},
    {id: 4, title: 'Bag', quantity:13},
    {id: 5, title: 'Cable', quantity: 5},
]

export default class ProductService {

    list() {
        return products;
    }
    incrementProduct(product){
        product.quantity ++;
    }
    decrementProduct(product){
        product.quantity --;
    }
}

export const productService = new ProductService();