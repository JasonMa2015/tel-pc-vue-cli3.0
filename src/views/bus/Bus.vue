<template>
  <div>
    <div><h3>{{ fromComponentAMsg }}</h3></div>
    <ComA></ComA>
    <ComB></ComB>
  </div>
</template>
<script>
import ComA from './ComA';
import ComB from './ComB';
export default {
  name: "componentB",
  components: {
    ComA,
    ComB
  },
  data () {
    return {
      fromComponentAMsg: "中央事件总线"
    };
  },
  methods: {},
  mounted () {
    console.log(this.$bus);
  }
};
</script>
