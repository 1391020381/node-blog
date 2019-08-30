<template>
  <div id="app">
    <Header v-show="$route.name !== 'markdown'"></Header>
    <SubHeader v-show="$route.fullPath === '/'"></SubHeader>
    <router-view />
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import { signIn } from "@/api/user";
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
  created() {
    this.onSubmit();
  },
  mounted() {},
  activated() {},
  update() {},
  methods: {
    async onSubmit() {
      try {
        if (!sessionStorage.getItem("userInfo")) {
          return;
        }
        let userInfo = JSON.parse(sessionStorage.getItem("userInfo"));

        let params = {
          userName: userInfo.userName,
          passWord: userInfo.passWord
        };
        const { result, resultCode } = await signIn(params);
        if (resultCode === "1") {
          this["user/initUserInfo"](result);
        }
      } catch (e) {
        console.log(e);
      }
    },
    ...mapMutations(["user/initUserInfo"])
  },
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
