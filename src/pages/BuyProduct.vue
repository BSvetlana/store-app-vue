<template>
  <div>
    <div class="container  mt-4">
        <div class="row">
            <div class="col-4">
                <h4 style="color: #66BB6A;">Product</h4>
                <ul class="list-group">
                    <li class="list-group-item list-group-item-success">{{ product.title }}</li>
                    <li class="list-group-item list-group-item-success">{{ product.quantity }}</li>
                    <li class="list-group-item list-group-item-success">
                        <select class="custom-select mb-2 mr-sm-2 mb-sm-0" v-model="selectCustomer">
                             <option selected>Choose...</option>
                            <option v-for="(customer,key) in customers" :key="key" v-bind:value="customer.id">
                                {{ customer.firstName }} {{ customer.lastName}}
                            </option>
                        </select>
                      </li>
                    <li class="list-group-item list-group-item-success">
                        <button @click="confirm()" type="submit" class="btn btn-success" style="backgroud-color: #81C784;" v-if="product.quantity > 0" :disabled="false">Confirm</button>
                        <button @click="confirm()" type="sumbit" class="btn btn-success" style="backgroud-color: #81C784;" v-else :disabled="true">Confirm</button>
                        <button type="sumbit" class="btn btn-success" style="backgroud-color: #81C784; float:right;">
                            <router-link to="/products" style="color: white; text-decoration: none">Cancel</router-link>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { productService } from "../services/ProductService";
import { customerService } from "../services/CustomerService";
export default {
  data() {
    return {
      customers: customerService.list(),
      product: productService.list(),
      product: productService.get(this.$route.params.id),
      customer: customerService.get(this.$route.params.id),
      selectCustomer: ""
    };
  },
  created() {
    this.customer = customerService.get(this.$route.params.id);
  },
  methods: {
    confirm() {
      if (!this.selectCustomer) {
        alert("Please select customer !!");
      }

      customerService.addProduct(this.product, this.selectCustomer);
      productService.decrementProduct(this.product);
      this.selectCustomer = {};
    }
  }
};
</script>

<style>


</style>

