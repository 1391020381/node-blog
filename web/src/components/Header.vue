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
          <el-link icon="el-icon-edit">写文章</el-link>
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
          <el-button size="small" v-show="!userInfo.userName">登录</el-button>
          <el-button size="small" v-show="userInfo.userName">退出</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
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
    go2Signup() {
      this.$router.push({ name: "signup" });
    }
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
<style lang="scss">
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
