<template>
  <div class="sub-header">
    <p class="user-name">{{ userInfo.userName }}</p>
    <p class="user-email">{{ userInfo.email }}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "SubHeader",
  components: {},
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
  computed: {
    ...mapState({
      userInfo: state => state.user.userInfo
    })
  },
  watch: {}
};
</script>

<style lang="scss" scoped>
.sub-header {
  padding: 48px 280px;
  color: #fff;
  background-image: linear-gradient(
    141deg,
    #009e6c 0,
    #00d1b2 71%,
    #00e7eb 100%
  );
}
</style>
