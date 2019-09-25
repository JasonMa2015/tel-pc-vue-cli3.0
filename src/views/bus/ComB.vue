// 新建一个组件 B
<template>
    <h1>{{ fromComAMsg }}</h1>
</template>
<script>
export default {
  name: "componentB",
  data () {
    return {
      fromComAMsg: ""
    };
  },
  methods: {

  },
  mounted () {
    this.$bus.$on("inceptMessage", msg => {
      this.fromComAMsg = msg;
    });
  }
};
</script>
