<template>
  <div>
    <div class="container mt-3 ml-1">
        <div class="row">
            <div class="col-8 mb-2">
                <h4 style="color: #66BB6A;">Customer form</h4>
                <form @submit.prevent="addCustomer">
                    <div class="form-group">
                        <label for="firstName" style="color: #81C784;">First Name</label>
                        <input type="text" class="form-control" id="firstName" placeholder="first name .." v-model="newCustomer.firstName">
                    </div>
           
                    <div class="form-group">
                        <label for="lastName" style="color: #81C784;">Last Name</label>
                        <input type="text" class="form-control" id="lastName" placeholder="last name ..." v-model="newCustomer.lastName">
                    </div>
                    <div class="form-group">
                        <label for="email" style="color: #81C784;">Email address</label>
                        <input type="email" class="form-control" id="email" placeholder="name@example.com" v-model="newCustomer.email">
                    </div>
                    <button type="sumbit" class="btn btn-success" style="backgroud-color: #81C784;">Submit</button>
                </form>
            </div>
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
                            <td><button class="btn btn-success btn-sm" @click="removeCustomer(index)">Remove</button></td>
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
          customers: customerService.list(),
          newCustomer: {
              firstName: '',
              lastName: '',
              email: ''
          }
      }
  },
  methods: {
      removeCustomer(index){
          customerService.delete(index)
      },
      addCustomer(){
          customerService.add(this.newCustomer)
          this.newCustomer = {}
      }
  }
}
</script>

<style scoped>

::-webkit-input-placeholder {
    color: #C8E6C9;
}
.btn-success {
  color: rgb(48, 75, 40);
  background-color: rgb(218, 238, 219);
  border-color: #43A047;
}
</style>


