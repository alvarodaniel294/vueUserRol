<script>
import axios from "axios";
import { useVuelidate } from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';

export default {
    setup() {
        return { v$: useVuelidate() }
    },
    name: "UsersCreateView",
    data() {
        return {
            model: {
                user: {
                    userName: '',
                    password: '',
                    email: '',
                    userDetailDTO: {
                        firstName: '',
                        lastName: '',
                        age: '',
                    }

                }
            }
        }
    },
    methods: {
        saveUser() {
            axios.post('http://localhost:8080/v1/users', this.model.user)
                .then(res => {
                    alert('user was saved successful');
                    this.$router.push('/users');
                }).catch(function (error) {
                    // hangle error on UI site
                })
        }
    },
    validations() {
        return {
            model: {
                user: {
                    userName: { required }
                }
            }
        }
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
                        <input type="text" v-model="model.user.userName" class="form-control" required />
                        <div class="invalid-feedback" v-if="!v$.model.user.userName">
                            First Name is required.
                        </div>
                    </div>
               
                <div class="mb-3">
                    <label for="">Password</label>
                    <input type="text" v-model="model.user.password" class="form-control" required />
                   
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
                    </button>
                    &nbsp;

                    <RouterLink to="/users" class="btn btn-primary">
                        Back
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>