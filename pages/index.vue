<template>
  <div class="main_page">
    <div class="container">
      <h4> Username: {{ isName }}</h4>
      <h4> Password: {{ isPassword }}</h4>
      <home/>
      <LoginForm/>
      <Message/>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Home from "~/components/Home";
import Message from "~/components/Message";
import LoginForm from "~/components/LoginForm";

export default {
  name: 'IndexPage',
  components: {Home, Message, LoginForm},
  computed: {
    ...mapGetters({
      isName: "user/getName",
      isPassword: "user/getPassword",
    }),
  }
}
</script>


<style scoped>
h4{
  margin: 10px 0;
}

.main_page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.container {
  border-radius: 20px;
  padding: 15px;
  background: #a2a1a1;
  min-width: 280px;
}
</style>
