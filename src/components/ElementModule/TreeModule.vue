<template>
  <div class="layout-div">
      <el-tree 
        :data="pbiTreeData" 
        :props="defaultProps" 
        @node-click="handleNodeClick">
      </el-tree>
      <button @click="myemitevent">test</button>
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
      debugger;
      var clickData = data;
      this.$emit('myevent',clickData);
      console.log(data);
    },
    myemitevent() {
      console.log("myEmitEvent");
      this.$emit('myevent',"111111111")
    }

  }
};
</script>