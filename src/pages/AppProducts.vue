<template>
  <div>
    <div class="container mt-3 mr-1">
        <div class="row">
            <div class="col-6 mb-4">
              <h4 style="color: #66BB6A;">Product list</h4>
                <table class="table table-bordered">
                    
                    <thead style="background-color: #E8F5E9;">
                        <tr>
                            <th scope="col">Product</th>
                            <th scope="col">Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(product,index) in products" :key="index">
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
        products: productService.list()
      }
    }
}
</script>

<style scoped>
.table>thead {
    text-align: center
}
</style>


