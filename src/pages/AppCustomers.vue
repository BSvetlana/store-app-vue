<template>
  <div>
    <div class="container mt-3 ml-1">
        <div class="row">
            <div class="col-8">
                <table class="table">
                    <thead style="background-color: #E8F5E9;">
                        <tr>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(customer,index) in customers" :key="index">
                            <td>{{ customer.firstName }}</td>
                            <td>{{ customer.lastName }}</td>
                            <td>{{ customer.email }}</td>
                            <td><button class="btn btn-info btn-sm" @click="removeCustomer(index)">Remove</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

import { customerService } from '../services/CustomerService'
export default {
  data() {
      return {
          customers: customerService.list()
      }
  },
  methods: {
      removeCustomer(index){
          customerService.delete(index)
      }
  }
}
</script>

<style scoped>

</style>


