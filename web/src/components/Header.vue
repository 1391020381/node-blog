<template>
  <div class="header">
    <el-row>
      <el-col :span="12">
        <div class="header-left">
          <el-link :underline="false">JS之禅</el-link>
          <el-link :underline="false">主页</el-link>
          <el-link :underline="false">关于</el-link>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="header-right">
          <el-link icon="el-icon-edit">写文章</el-link>
          <el-button type="primary" @click="go2Signup" size="small"
            >注册</el-button
          >
          <el-button size="small">登录</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
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
  computed: {},
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
