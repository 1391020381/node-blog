<template>
  <div class="article-list">
    <el-card class="box-card">
      <div v-for="item in articlesList" :key="item._id" class="items">
        <el-link type="primary" class="item" @click="go2ArticleDetails(item)">{{
          item.title
        }}</el-link>
      </div>
    </el-card>

    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="pagination.currentPage"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="pagination.pageSize"
      layout="sizes, prev, pager, next"
      :total="pagination.total"
    >
    </el-pagination>
  </div>
</template>

<script>
import { articlesList } from "@/api/post";
export default {
  name: "ArticleList",
  components: {},
  props: {},
  data() {
    return {
      pagination: {
        currentPage: 1,
        pageSize: 10,
        total: 100
      },
      articlesList: []
    };
  },
  created() {
    this.getArticlesList();
  },
  mounted() {},
  activated() {},
  update() {},
  methods: {
    go2ArticleDetails(item) {
      this.$router.push({ name: "articleDetails", query: { id: item._id } });
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.getArticlesList();
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.getArticlesList();
    },
    async getArticlesList() {
      try {
        const {
          result: { list, total, pageSize },
          resultCode
        } = await articlesList({
          currentPage: this.pagination.currentPage,
          pageSize: this.pagination.pageSize
        });
        if (resultCode === "1") {
          this.articlesList = list;
          this.pagination.pageSize = pageSize;
          this.pagination.total = total;
        }
      } catch (e) {
        console.log(e);
      }
    }
  },
  filter: {},
  computed: {},
  watch: {}
};
</script>

<style lang="scss" scoped>
.article-list {
  padding: 0 280px;
  .items {
    .item {
      padding: 10px;
    }
  }
}
</style>
<style lang="scss">
.article-list {
  .el-pagination {
    margin-top: 15px;
    text-align: right;
  }
}
</style>
