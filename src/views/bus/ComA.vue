<template>
  <button @click="sendMessage">向组件ComB发送数据</button>
</template>
<script>
export default {
  name: "componentA",
  data () {
    return {
      msg: "当前信息来自于组件A(ComA.vue)"
    };
  },
  methods: {
    sendMessage () {
      this.$bus.$emit("inceptMessage", this.msg);
    }
  }
};
</script>
