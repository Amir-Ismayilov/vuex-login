<template>
  <div v-if="isLogin">
    <button type="submit" class="btn-danger" @click="logout">Logout</button>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: "Home",
  computed: {
    ...mapGetters({
      isLogin: "user/getIsLogin"
    })
  },
  methods: {
    ...mapActions({
      logoutStore: "user/logoutStore"
    }),
    logout() {
      this.logoutStore();
    }
  }
}
</script>

<style scoped>
.btn-danger {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  padding: 10px 15px;
  margin-top: 10px;
  min-width: 100%;
  color: #5c0000;
  background: rgba(255, 0, 0, 0.47);
  border: 1px solid #5c0000;
}
</style>
