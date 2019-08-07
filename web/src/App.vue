<template>
  <div id="app">
    <Header></Header>
    <router-view />
  </div>
</template>
<script>
import Header from "./components/Header";
export default {
  name: "App",
  components: {
    Header
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
