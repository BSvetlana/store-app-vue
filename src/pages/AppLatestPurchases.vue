<template>
  <div>
    <div class="container  mt-4">
        <div class="row">
            <div class="col-4">
                <ul class="list-group mb-5">
                    <li class="list-group-item list-group-item-success" style="display: flex; justify-content: center;">
                        <router-link to="/customers​" style="color: #2E7D32; text-decoration: none;" class="nav-link"><h5><b>Back to Customer List</b></h5></router-link>
                    </li>
                </ul>
            </div>
            <div class="col-9">
                <h4 style="color: #66BB6A;">Our Customer</h4>
                <table class="table table-bordered">
                    <thead style="background-color: #E8F5E9;">
                        <tr>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{{ customer.firstName }}</td>
                            <td>{{ customer.lastName }}</td>
                            <td>{{ customer.email }}</td>
                        </tr>
                    </tbody>
                </table>
                <h4 style="color: #66BB6A;">Customer Products</h4>
                <ul class="list-group">
                    <li class="list-group-item list-group-item-success"  v-for="productList in customer.productList" :key="productList.id">{{ productList.title }}</li>
                </ul>

            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { customerService } from '../services/CustomerService'
export default {
  created(){
      this.customer = customerService.get(this.$route.params.id)
  }
}
</script>

<style scoped>

</style>


