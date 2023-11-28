<script>
import axios from "axios";


export default {
    name: "UsersEditView",
    data() {
        return {
            userId: '',
            model: {
                user: {
                    id: '',
                    userName: '',
                    password: '',
                    email: '',
                    userDetailDTO: {
                        userDetailId:'',
                        firstName: '',
                        lastName: '',
                        age: '',
                        birthDate: ''
                    }

                }
            }
        }
    },
    methods: {
        saveUser(userId) {
            axios.put(`http://localhost:8080/v1/users/${this.userId}`, this.model.user)
                .then(res => {
                    alert('user was updated successful');
                    this.$router.push('/users');
                }).catch(function (error) {
                    // hangle error on UI site
                })
        },
        getUserById(userId) {
            axios.get(`http://localhost:8080/v1/users/${userId}`).then(res => {
                const responseData = res.data;

                this.model.user.id = responseData.id;
                this.model.user.userName = responseData.userName;
                this.model.user.password = responseData.password;
                this.model.user.email = responseData.email;

                // Assign other values as needed, handling potential null values
                this.model.user.userDetailDTO.userDetailId = responseData.userDetailDTO?.userDetailId || null
                this.model.user.userDetailDTO.firstName = responseData.userDetailDTO?.firstName || '';
                this.model.user.userDetailDTO.lastName = responseData.userDetailDTO?.lastName || '';
                this.model.user.userDetailDTO.age = responseData.userDetailDTO?.age || null;
                this.model.user.userDetailDTO.birthDate = responseData.userDetailDTO?.birthDate || null;

            }).catch(function (error) {

            })
        }
    },
    mounted() {
        this.userId = this.$route.params.id;
        this.getUserById(this.userId);
    }
}
</script>

<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-header">
                <h4>Add Users</h4>
            </div>
            <div class="card-body">
                <div class="mb-3">
                    <label for="">User Name</label>
                    <input type="text" v-model="model.user.userName" class="form-control">
                </div>
                <div class="mb-3">
                    <label for="">Password</label>
                    <input type="text" v-model="model.user.password" class="form-control">
                </div>
                <div class="mb-3">
                    <label for="">Email</label>
                    <input type="text" v-model="model.user.email" class="form-control">
                </div>

                <div class="mb-3">
                    <label for="">First Name</label>
                    <input type="text" v-model="model.user.userDetailDTO.firstName" class="form-control">
                </div>

                <div class="mb-3">
                    <label for="">Last Name</label>
                    <input type="text" v-model="model.user.userDetailDTO.lastName" class="form-control">
                </div>

                <div class="mb-3">
                    <label for="">Age</label>
                    <input type="text" v-model="model.user.userDetailDTO.age" class="form-control">
                </div>

                <div class="mb-3">
                    <button type="button" @click="saveUser" class="btn btn-primary">
                        Save
                    </button>&nbsp;
                    <RouterLink to="/users" class="btn btn-primary">
                        Back
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>