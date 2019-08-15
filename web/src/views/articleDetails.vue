<template>
  <div class="article-details">
    articleDetails
  </div>
</template>

<script>
import { getArticlesDetail } from "@/api/post";
export default {
  name: "articleDetails",
  components: {},
  props: {},
  data() {
    return {};
  },
  created() {
    this.getArticlesDetail();
  },
  mounted() {},
  activated() {},
  update() {},
  methods: {
    async getArticlesDetail() {
      try {
        const { result, resultCode } = await getArticlesDetail(
          this.$route.query.id
        );
        if (resultCode === "1") {
          console.log(result);
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

<style lang="scss" scoped></style>
