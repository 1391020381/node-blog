<template>
  <div class="article-details">
    <div class="content">
      <el-card class="box-card">
        <div slot="header">
          <span>{{ detail.title }}</span>
        </div>
        <div class="el-card-content">
          <div class="author">
            <span class="author-name"
              >作者:{{ detail.author && detail.author.userName }}</span
            >
            <div class="author-operate">
              <el-button type="primary" size="small">编辑</el-button>
              <el-button type="danger" size="small">删除</el-button>
            </div>
          </div>
          <div class="article-content" v-html="detail.content"></div>
        </div>
      </el-card>
      <el-card class="box-card">
        <el-form
          ref="commentForm"
          :model="commentForm"
          :rules="rules"
          class="comment-form"
        >
          <el-form-item label="" prop="comment">
            <el-input
              type="textarea"
              v-model="commentForm.comment"
              placeholder="请输入你的评论"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('commentForm')"
              >Submit</el-button
            >
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script>
import { getArticlesDetail } from "@/api/post";
export default {
  name: "articleDetails",
  components: {},
  props: {},
  data() {
    return {
      detail: {},
      commentForm: {
        comment: ""
      },
      rules: {
        comment: [
          { required: true, message: "请输入你的评论", trigger: "blur" }
        ]
      }
    };
  },
  created() {
    this.getArticlesDetail();
  },
  mounted() {},
  activated() {},
  update() {},
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    async getArticlesDetail() {
      try {
        const { result, resultCode } = await getArticlesDetail(
          this.$route.query.id
        );
        if (resultCode === "1") {
          this.detail = result;
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
.article-details {
  padding-top: 30px;
  .content {
    margin: 0 auto;
    width: 1200px;
    .el-card-content {
      .author {
        display: flex;
        .author-name {
          flex: 1;
        }
        .author-operate {
          width: 200px;
        }
      }
      .article-content {
        margin-top: 20px;
      }
    }
    .el-card:last-child {
      margin-top: 20px;
    }
  }
}
</style>
<style lang="scss">
.article-details {
  .comment-form {
    .el-form-item:last-child {
      .el-form-item__content {
        margin-top: 20px;
        text-align: right;
      }
    }
  }
}
</style>
