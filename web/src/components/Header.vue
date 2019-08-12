<template>
  <div class="header">
    <el-row>
      <el-col :span="12">
        <div class="header-left">
          <el-link :underline="false">JS之禅</el-link>
          <el-link :underline="false" href="/">主页</el-link>
          <el-link :underline="false">关于</el-link>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="header-right">
          <el-link
            icon="el-icon-edit"
            v-show="userInfo.userName"
            @click="go2PublishArticles"
            >写文章</el-link
          >
          <el-button
            type="primary"
            @click="go2Signup"
            size="small"
            v-show="!userInfo.userName"
            >注册</el-button
          >
          <el-button size="small" v-show="userInfo.userName" type="text">{{
            userInfo.userName
          }}</el-button>
          <el-button
            size="small"
            v-show="!userInfo.userName && $route.name !== 'signin'"
            @click="go2SignIn"
            >登录</el-button
          >
          <el-button size="small" v-show="userInfo.userName" @click="signOut"
            >退出</el-button
          >
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { signOut } from "@/api/user";
import { mapState } from "vuex";
export default {
  name: "Header",
  components: {},
  props: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  activated() {},
  update() {},
  methods: {
    go2PublishArticles() {
      this.$router.push({ name: "markdown" });
    },
    go2Signup() {
      this.$router.push({ name: "signup" });
    },
    go2SignIn() {
      this.$router.push({ name: "signin" });
    },
    async signOut() {
      try {
        const { resultCode } = await signOut({});
        if (resultCode === "1") {
          this["user/initUserInfo"]({});
          sessionStorage.setItem("userInfo", "");
        }
      } catch (e) {
        console.log(e);
      }
    },
    ...mapMutations(["user/initUserInfo"])
  },
  filter: {},
  computed: {
    ...mapState({
      userInfo: state => state.user.userInfo
    })
  },
  watch: {}
};
</script>

<style lang="scss" scoped>
.header {
  height: 52px;
  line-height: 52px;
  padding: 0 280px;
}
</style>
<style lang="scss" scoped>
.header {
  .header-left {
    .el-link {
      margin-left: 15px;
    }
  }
  .header-right {
    text-align: right;
    .el-link {
      margin-left: 15px;
    }
    .el-button {
      margin-left: 15px;
    }
  }
}
</style>
