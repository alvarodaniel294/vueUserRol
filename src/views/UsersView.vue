<script>
import axios from "axios";

export default {
  name: "UsersView",
  data() {
    return {
      users: []
    }
  },
  methods: {
    getUsers() {
      axios.get('http://localhost:8080/v1/users?detailed=true').then(res => {
        this.users = res.data;
      }).catch(function (error) {
        // handle error on UI site
      })
    },

    deleteUserById(userId) {
      if (confirm('Are you sure, you want to delete this data?')) {
        axios.delete(`http://localhost:8080/v1/users/${userId}`).then(res => {
          this.getUsers();
        }).catch(function (error) {
          // handle error on UI site
        })
      }
    }
  },
  mounted() {
    this.getUsers();
  }


}
</script>

<template>
  <div class="course">
    <div class="card">
      <div class="card-header">
        <h4>
          Students
          <RouterLink to="/users/create" class="btn btn-primary float-end">
            Add User
          </RouterLink>
        </h4>
      </div>
      <div class="card-body">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Nro.</th>
              <th>UserName</th>
              <th>Password</th>
              <th>Email</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>Date of Birth</th>
            </tr>
          </thead>
          <tbody v-if="users.length > 0">
            <tr v-for="(user, index) in this.users" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ user.userName }}</td>
              <td>{{ user.password }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.userDetailDTO?.firstName }}</td>
              <td>{{ user.userDetailDTO?.lastName }}</td>
              <td>{{ user.userDetailDTO?.age }}</td>
              <td>{{ user.userDetailDTO?.birthDate }}</td>
              <td>
                <RouterLink :to="{ path: '/users/' + user.id + '/edit' }" class="btn btn-success">
                  Edit
                </RouterLink>
                <button type="button" @click="deleteUserById(user.id)" class="btn btn-danger">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
          <tbody v-else>
            <tr>
              <td colspan="7">There are no Users</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>