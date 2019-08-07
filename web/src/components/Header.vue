<template>
  <div class="header">
    <el-row type="flex" justify="space-around">
      <el-col :span="12">
        <div>
          <el-link :underline="false">JS之禅</el-link>
          <el-link :underline="false">主页</el-link>
          <el-link :underline="false">关于</el-link>
        </div>
      </el-col>
      <el-col :span="12">
        <div>
          <el-link icon="el-icon-edit">写文章</el-link>
          <el-button type="primary">注册</el-button>
          <el-button>登录</el-button>
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
  methods: {},
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
