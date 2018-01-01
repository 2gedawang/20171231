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

    <el-container style=" border: 1px solid #eee">
      <el-container>
        <el-main style="padding:20px 5px;">
          <FormModuleDemo ></FormModuleDemo>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>

import FormModuleDemo from '@/components/ElementModule/FormModule'

export default {
  components:{
    FormModuleDemo
  },
  methods: {
    loadTreeData(data) {
      this.treeName = data;
    }
  },
  data() {
    return {
      loginUser: 'wcadmin',
      treeName:''
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
</style>