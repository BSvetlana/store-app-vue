<template>
  <div>
    <div class="container mt-3 mr-1">
        <div class="row">
            <div class="col-6 mb-4">
              <h3 style="color: #66BB6A;">Product list</h3>
                <div class="form-group">
                    <label for="firstName">Search Tearm</label>
                    <input type="text" class="form-control" id="firstName" placeholder="Search.." v-model='searchTerm'>
                </div>
                <table class="table table-bordered">
                    <thead style="background-color: #E8F5E9;">
                        <tr>
                            <th scope="col">Product</th>
                            <th scope="col">Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(product,index) in  filteredProducts " :key="index">
                            <td>{{ product.title }}</td>
                            <td>{{ product.quantity }}</td>
                        </tr>
                    </tbody>
                </table>
                
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { productService } from '../services/ProductService.js'

export default {
  
    data(){
      return {
        products: productService.list(),
        searchTerm: ''
      }
    },
    computed: {
      filteredProducts() {
        
        return this.products.filter(product => {
         return product.title.toLowerCase().startsWith(this.searchTerm.toLowerCase())
        })
      }
    },

}
</script>

<style scoped>

::-webkit-input-placeholder {
    color: #C8E6C9;
}
.table>thead {
    text-align: center
}
</style>


