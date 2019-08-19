<template>
  <div class="comment-list">
    <el-card class="items" v-for="item in post" :key="item._id">
      <div class="item-title">
        <span class="icon"></span
        ><span class="user-name">{{ item.from && item.from.userName }}</span>
        <div class="btn">
          <el-button type="primary" size="small">回复</el-button>
          <el-button type="danger" size="small">删除</el-button>
        </div>
      </div>
      <div class="item-content">{{ item.content }}</div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "commentList",
  components: {},
  props: {
    post: {
      type: Array,
      deaflut: []
    }
  },
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
.comment-list {
  .items {
    margin-top: 20px;
    .item-title {
      display: flex;
      .icon {
        margin-right: 15px;
        display: block;
        width: 24px;
        height: 24px;
        background: #ccc;
      }
      .user-name {
        flex: 1;
      }
    }
    .item-content {
      padding-left: 30px;
    }
  }
}
</style>
