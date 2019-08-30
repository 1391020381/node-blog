<template>
  <div class="signup">
    <el-form :model="signupForm" label-width="80px;">
      <el-form-item label="姓名">
        <el-input
          v-model="signupForm.userName"
          placeholder="请输入用户名"
        ></el-input>
      </el-form-item>
      <el-form-item label="邮箱" placeholder="请输入你的邮箱">
        <el-input v-model="signupForm.email"></el-input>
      </el-form-item>
      <el-form-item label="密码" placeholder="请输入密码">
        <el-input v-model="signupForm.passWord"></el-input>
      </el-form-item>
      <el-form-item label="重复密码" placeholder="确认你的密码">
        <el-input v-model="signupForm.confirmPassword"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即注册</el-button>
        <el-button @click="go2Signin">已有账号,去登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { signup } from "@/api/user.js";
export default {
  name: "signup",
  components: {},
  props: {},
  data() {
    return {
      signupForm: {
        userName: "",
        email: "",
        passWord: "",
        confirmPassword: ""
      }
    };
  },
  created() {},
  mounted() {
    console.log("2342342", process.env.VUE_APP_BASE_API);
  },
  activated() {},
  update() {},
  methods: {
    go2Signin() {
      this.$router.push({ name: "signin" });
    },
    async onSubmit() {
      try {
        const { result, resultCode } = await signup(this.signupForm);
        if (resultCode === "1") {
          console.log(result);
          this["user/initUserInfo"](result);
          this.$router.replace({ name: "home" });
        }
      } catch (e) {
        console.log(e);
      }
    },
    ...mapMutations(["user/initUserInfo"])
  },
  filter: {},
  computed: {},
  watch: {}
};
</script>

<style lang="scss" scoped>
.signup {
  margin: 0 auto;
  margin-top: 80px;
  width: 600px;
}
</style>
