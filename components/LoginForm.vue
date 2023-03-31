<template>
  <div v-if="!isLogin">
    <div class="form-group">
      <label for="name">Username</label>
      <input id="name" type="text" v-model="username" placeholder="Enter username">
    </div>

    <div class="form-group">
      <label for="password">Password</label>
      <input id="password" type="password" v-model="password" placeholder="Enter password">
    </div>
    <button class="btn-info" type="submit" @click="login">Login</button>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  name: "LoginForm",
  data() {
    return {
      username: '',
      password: '',
    }
  },

  computed: {
    ...mapGetters({
      isLogin: "user/getIsLogin",
    }),
  },

  methods: {
    ...mapActions({
      updateIsLogin: "user/updateIsLogin"
    }),
    login() {
      this.updateIsLogin([this.username, this.password]);
    }
  }
}
</script>

<style scoped>

.btn-info {
  padding: 10px 20px;
  color: white;
  background: blue;
  border: none;
  margin-top: 10px;
  border-radius: 10px;
  min-width: 100%;
}
</style>
