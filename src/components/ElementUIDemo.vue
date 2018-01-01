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

    <el-container style="height: 1000px; border: 1px solid #eee">
      <el-aside width="300px" style="background-color: rgb(238, 241, 246)">
        <TreeModuleDemo @loadTreeData="loadTreeData" ></TreeModuleDemo>
      </el-aside>
      <el-container>
        <el-main style="padding:20px 5px;">
          <TableModuleDemo :treeName="treeName" ></TableModuleDemo>
        </el-main>
      </el-container>
    </el-container>

    <el-dialog
    title="提示"
    :visible.sync="dialogVisible"
    width="30%"
    :before-close="handleClose">
    <span v-text="dialogmsg"></span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
    </span>
  </el-dialog>
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
      if(data.oid == '-1'){
        this.dialogmsg = '这是一个异常节点';
        this.dialogVisible = true;
      }else{
        this.treeName = data;
      }
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
      .then(_ => {
        done();
      })
      .catch(_ => {});
    }
  },
  data() {
    return {
      dialogmsg: '信息初始化',
      loginUser: 'wcadmin',
      dialogVisible:false,
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

.user-panel {
  float:right
}

</style>