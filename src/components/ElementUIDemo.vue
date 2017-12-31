<template>
  <div class="layou-div">
    <!---头部样式-->
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span v-html="loginUser"></span>
    </el-header>

    <el-container style="height: 500px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <TreeModuleDemo @loadTreeData="loadTreeData" ></TreeModuleDemo>
      </el-aside>
      <el-container>
        <el-main>
          <TableModuleDemo></TableModuleDemo>
        </el-main>
      </el-container>
    </el-container>

  </div>
</template>

<script>

import TreeModuleDemo from '@/components/ElementModule/TreeModule'
import TableModuleDemo from '@/components/ElementModule/TableModule'

export default {
  components:{
    TreeModuleDemo,TableModuleDemo
  },
  methods: {
    loadTreeData(data) {
      console.log("parent:"+data);
    }
  },
  data() {
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    };
    return {
      tableData: [],
      loginUser: 'wcadmin',
    }
  }
};
</script>

<style>
.el-header{
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}

.el-footer{
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}

.user-panel {
  float:right
}

</style>