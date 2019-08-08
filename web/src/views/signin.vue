<template>
  <div class="signin">
    <el-form :model="signupForm" label-width="80px;">
      <el-form-item label="姓名">
        <el-input
          v-model="signupForm.userName"
          placeholder="请输入用户名"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" placeholder="请输入密码">
        <el-input v-model="signupForm.passWord"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即注册</el-button>
        <el-button @click="go2Signup">还没有账号?</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "signin",
  components: {},
  props: {},
  data() {
    return {
      signupForm: {
        userName: "",
        passWord: ""
      }
    };
  },
  created() {},
  mounted() {},
  activated() {},
  update() {},
  methods: {
    go2Signup() {
      this.$router.push({ name: "signup" });
    },
    onSubmit() {}
  },
  filter: {},
  computed: {},
  watch: {}
};
</script>

<style lang="scss" scoped>
.signin {
  margin: 0 auto;
  margin-top: 80px;
  width: 600px;
}
</style>
