
const customers = [
    {id: 1, firstName: 'John', lastName: 'Jonson', email: 'john@gmail.com', productList: []},
    {id: 2, firstName: 'Stiv', lastName: 'Stivenson', email: 'stiv@gmail.com', productList: []},
    {id: 3, firstName: 'George', lastName: 'Georson', email: 'georg@gmail.com', productList: []},
    {id: 4, firstName: 'Mark', lastName: 'Markson', email: 'mark@gmail.com', productList: []},
    {id: 5, firstName: 'Jan', lastName: 'Janson', email: 'jahn@gmail.com', productList: []},
]

export default class CustomerService {

    list(){
        return customers;
    }

    delete(index){
        customers.splice(index,1)
    }
    add(newCustomer){
        customers.push(newCustomer)
    }
    get(id) {
        return customers.find(customer => id == customer.id)

    }

    addProduct(product,id){

        this.customer  = this.get(id)
        
        this.customer.productList.push(product)
    }

}

export const customerService = new CustomerService();