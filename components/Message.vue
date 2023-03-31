<template>
  <div>
    <div class="alert danger" v-if="LoginMessage">
      Username and/or password incorrect!
    </div>

    <div class="alert success" v-if="isLogin">
      Login succesfully
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: "Message",
  computed: {
    ...mapGetters({
      isLogin: "user/getIsLogin",
      LoginMessage: "user/getLoginMessage",
      UserName: "user/getName"
    }),
  }
}
</script>

<style scoped>
.alert {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  padding: 10px 15px;
  max-width: 100%;
  margin-top: 5px;
}

.danger {
  color: #5c0000;
  background: rgba(255, 0, 0, 0.38);
  border: 1px solid #5c0000;
}

.success {
  color: green;
  background: rgba(76, 255, 76, 0.43);
  border: 1px solid green;
}
</style>
