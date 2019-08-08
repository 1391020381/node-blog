<template>
  <div id="app">
    <Header></Header>
    <SubHeader v-show="$route.fullPath === '/'"></SubHeader>
    <router-view />
  </div>
</template>
<script>
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
export default {
  name: "App",
  components: {
    Header,
    SubHeader
  },
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
<style lang="scss">
html,
body {
  height: 100%;
  width: 100%;
}
.app {
  height: 100%;
}
</style>
