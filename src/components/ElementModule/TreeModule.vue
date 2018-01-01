<template>
  <div class="layout-div">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">Product</el-menu-item>
      <el-menu-item index="2">Soltion</el-menu-item>
    </el-menu>
    <el-tree 
    :data="pbiTreeData"
    :props="defaultProps"
    :load="lazyLoad"
    node-key="oid"
    ref="tree"
    lazy
    @node-click="handleNodeClick">
  </el-tree>
</div>
</template>

<script>

export default {
  name: 'treeModule',
  data() {
    return {
     activeIndex:'1',
     pbiTreeData: [],
     defaultProps: {
      children: 'children',
      label: 'name'
    }
  };
},
methods: {
  handleSelect(key, path) {

  },
  mounted() {
    console.log('load tree module');
  },
  getCheckedNodes() {
      //通过 node 获取
      console.log(this.$refs.tree.getCheckedNodes());
    },
    getCheckedKeys() {
      console.log(this.$refs.tree.getCheckedKeys());
    },
    setCheckedNodes() {
      //按照node选中数据
      this.$refs.tree.setCheckedNodes([{
        id: 5,
        label: '二级 2-1'
      }, {
        id: 9,
        label: '三级 1-1-1'
      }]);
    },
    setCheckedKeys() {
      this.$refs.tree.setCheckedKeys([3]);
    },
    resetChecked() {
      //清空数据
      this.$refs.tree.setCheckedKeys([]);
    },
    handleNodeClick(data) {
      this.$emit('loadTreeData',data);
    },
    lazyLoad(node, resolve) {
      var data = node.data;
      if (node.level === 0) {
        this.initPbiTree();
      }else if(data.oid != -1){
        setTimeout(() => {
          this.appendPbiTree(resolve);
        }, 500);
      }else {
        resolve([]);
      }
    },
    initPbiTree() {
      const hideNode = {
        'name':'异常提示',
        'oid':'-1'
      }
      this.$http.get('http://localhost:8081/test/pbiTreeData.json', {
        orderId: Math.random()
      })
      .then((res) => {
        this.pbiTreeData = res.body;
        this.pbiTreeData.push(hideNode);
      }, (err) => {
        return [];
      });
    },
    appendPbiTree(resolve) {
      this.$http.get('http://localhost:8081/test/pbiTreeData.json', {
        orderId: Math.random()
      })
      .then((res) => {
        resolve(res.body);
      }, (err) => {
        resolve([]);
      });
    }
  }
};
</script>