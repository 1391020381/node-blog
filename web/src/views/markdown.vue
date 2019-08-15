<template>
  <div class="components-container">
    <div class="title">
      <input
        class="el-input"
        v-model="title"
        placeholder="输入文章标题........"
      />
      <el-button
        type="primary"
        size="mini"
        class="el-btn"
        v-if="!$route.query.id"
        @click="publishOrUpdatesArticle"
        >发布</el-button
      >
      <el-button
        type="primary"
        size="mini"
        class="el-btn"
        v-if="$route.query.id"
        @click="publishOrUpdatesArticle"
        >更新</el-button
      >
    </div>
    <div class="editor-container">
      <markdown-editor
        ref="markdownEditor"
        v-model="content"
        :language="language"
        height="600px"
      />
    </div>
  </div>
</template>

<script>
import { publishArticles, getArticlesDetail, updateArticle } from "@/api/post";
import MarkdownEditor from "@/components/MarkdownEditor";
export default {
  name: "Markdown",
  components: { MarkdownEditor },
  data() {
    return {
      title: "",
      content: "",
      languageTypeList: {
        en: "en_US",
        zh: "zh_CN",
        es: "es_ES"
      }
    };
  },
  created() {
    if (this.$route.query.id) {
      this.getArticlesDetail();
    }
  },
  computed: {
    language() {
      return this.languageTypeList["en"];
    }
  },
  methods: {
    async publishArticles() {
      try {
        const { result, resultCode } = await publishArticles({
          title: this.title,
          content: this.content
        });
        if (resultCode === "1") {
          console.log(result);
          this.$router.push({
            name: "articleDetails",
            query: { id: result._id }
          });
        }
      } catch (e) {
        console.log(e);
      }
    },
    async updateArticle() {
      try {
        const { result, resultCode } = await updateArticle({
          id: this.$route.query.id,
          title: this.title,
          content: this.content
        });
        if (resultCode === "1") {
          this.$router.push({
            name: "articleDetails",
            query: { id: result._id }
          });
        }
      } catch (e) {
        console.log(e);
      }
    },
    async getArticlesDetail() {
      try {
        const { result, resultCode } = await getArticlesDetail(
          this.$route.query.id
        );
        if (resultCode === "1") {
          this.title = result.title;
          this.content = result.content;
        }
      } catch (e) {
        console.log(e);
      }
    },
    publishOrUpdatesArticle() {
      this.getHtml();
      if (!this.title) {
        this.$message({
          message: "请输入文章标题",
          type: "warning"
        });
        return;
      }
      if (!this.content) {
        this.$message({
          message: "请输入文章内容",
          type: "warning"
        });
        return;
      }
      this.publishArticles();
    },
    getHtml() {
      this.content = this.$refs.markdownEditor.getHtml();
      console.log(this.html);
    }
  }
};
</script>

<style lang="scss" scoped>
.components-container {
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    .el-input {
      flex: 1;
      height: 100%;
      outline: none;
      padding-left: 30px;
    }
    .el-btn {
      margin-left: 50px;
      margin-right: 50px;
    }
  }
}
</style>
