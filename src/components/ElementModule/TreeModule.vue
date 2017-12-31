<template>
  <div class="layout-div">
      <el-tree 
        :props="defaultProps"
        lazy
        :load="lazyLoad" 
        @node-click="handleNodeClick">
      </el-tree>
  </div>
</template>

<script>

export default {
  name: 'treeModule',
  data() {
    return {
      pbiTreeData: [{
        name: '一级 1',
        oid: '1-1',
        children: [{
          name: '二级 1-1',
          oid: '2-1',
          children: [{
            name: '三级 1-1-1',
            oid: '3-1'
          }]
        },{
          name: '二级 1-2',
          oid: '2-2'
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'name'
      }
    };
  },
  methods: {
    handleNodeClick(data) {
      this.$emit('loadTreeData',data);
    },
    lazyLoad(node, resolve) {
      debugger;
      if(node.level == 0){
        return resolve[{'name':'111'}];
      }
    }
  }
};
</script>