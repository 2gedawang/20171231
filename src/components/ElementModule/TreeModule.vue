<template>
  <div class="layout-div">
      <el-tree 
        :data="pbiTreeData"
        :props="defaultProps"
        lazy
        :load="lazyLoad"
        node-key="oid"
        @node-click="handleNodeClick">
      </el-tree>
  </div>
</template>

<script>

export default {
  name: 'treeModule',
  data() {
    return {
      pbiTreeData: [{"name": "test111"}],
      defaultProps: {
        children: 'children',
        label: 'name'
      }
    };
  },
  methods: {
    mounted() {
      this.$http.get('http://localhost:8081/test/pbiTreeData.json', {
        orderId: "1"
      })
      .then((res) => {
        debugger
        this.pbiTreeData = res
      }, (err) => {
        debugger
        // this.$emit('on-close-check-dialog')
      });
    },
    handleNodeClick(data) {
      this.$emit('loadTreeData',data);
    },
    lazyLoad(node, resolve) {
      this.$http.get('http://localhost:8081/test/pbiTreeData.json', {
        orderId: "1"
      })
      .then((res) => {
        this.isShowSuccessDialog = true
      }, (err) => {
        this.isShowFailDialog = true
      })
    }
  }
};
</script>