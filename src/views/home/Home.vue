<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <h3>{{$store.state.app.test}}</h3>
    <Table border :columns="columns1" :data="data1"></Table>
    <Button style="margin-top: 20px;" type="primary">增加配置主题</Button>
    <Switch style="margin-top: 20px;" v-model="switch1" @on-change="change" />
  </div>
</template>

<script>
import { getListTemplate } from '@/api/data.js';
export default {
  name: 'Home',
  data () {
    return {
      switch1: false,
      msg: '欢迎使用',
      columns1: [
        {
          title: 'Name',
          key: 'name'
        },
        {
          title: 'Age',
          key: 'age'
        },
        {
          title: 'Address',
          key: 'address'
        }
      ],
      data1: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        }
      ]
    };
  },
  created () {
    this.getListTemplate();
  },
  methods: {
    change (status) {
      this.$Message.info('开关状态：' + status);
    },
    getListTemplate (pageNow = 1, totalSize = 20){
      getListTemplate({
        page: pageNow,
        pageSize: totalSize
      }).then(res => {
        let ls = 'dddd';
        console.log(res);
        console.log(ls);

      }).catch(err => {
        console.log(err);
        this.$Message.error('请求失败，请刷新重试');
      });
    }
  }
};
</script>

<style scoped>

</style>
