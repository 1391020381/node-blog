<template>
  <div class="components-container">
    <div class="editor-container">
      <markdown-editor
        ref="markdownEditor"
        v-model="content"
        :language="language"
        height="300px"
      />
    </div>

    <el-button
      style="margin-top:80px;"
      type="primary"
      icon="el-icon-document"
      @click="getHtml"
    >
      Get HTML
    </el-button>
    <div v-html="html" />
  </div>
</template>

<script>
import MarkdownEditor from "@/components/MarkdownEditor";

const content = `
**This is test**

* vue
* element
* webpack

`;
export default {
  name: "MarkdownDemo",
  components: { MarkdownEditor },
  data() {
    return {
      content: content,
      html: "",
      languageTypeList: {
        en: "en_US",
        zh: "zh_CN",
        es: "es_ES"
      }
    };
  },
  computed: {
    language() {
      return this.languageTypeList["en"];
    }
  },
  methods: {
    getHtml() {
      this.html = this.$refs.markdownEditor.getHtml();
      console.log(this.html);
    }
  }
};
</script>

<style scoped>
.editor-container {
  width: 100%;
  margin-bottom: 30px;
}
.tag-title {
  margin-bottom: 5px;
}
</style>
