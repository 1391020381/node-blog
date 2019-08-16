<template>
  <div class="home">
    <ArticleList></ArticleList>
  </div>
</template>

<script>
import ArticleList from "@/components/ArticleList.vue";
export default {
  name: "home",
  components: { ArticleList },
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
.signin {
  margin: 0 auto;
  margin-top: 80px;
  width: 600px;
}
</style>
