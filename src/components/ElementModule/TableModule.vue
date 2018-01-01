<template>
  <div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">Class</el-menu-item>
      <el-menu-item index="2">Product</el-menu-item>
      <el-menu-item index="3"><a :href="addPartUrl">Add Part</a></el-menu-item>
      <!-- 
      子菜單样例
      <el-submenu index="2">
        <template slot="title">Product</template>
        <div>
          <el-menu-item index="2-1" class="el-menu-sub-btn">Release</el-menu-item>
          <el-menu-item index="2-2" class="el-menu-sub-btn">Add</el-menu-item>
          <el-menu-item index="2-3" class="el-menu-sub-btn">Delete</el-menu-item>
        </div>
      </el-submenu> -->
    </el-menu>
    <div class="class-btn-grp">
      <el-popover
      ref="release-popo"
      placement="right"
      width="800"
      trigger="click">
      <FormModuleDemo></FormModuleDemo>
    </el-popover>
    <el-button type="primary" plain size="mini" @click="dialogRelease = true">Release</el-button>
    <el-button type="primary" plain size="mini"  v-popover:release-popo >Create</el-button>
    <el-button type="primary" plain size="mini" @click="addPart" >Add</el-button>
    <el-button type="primary" plain size="mini">Delete</el-button>
  </div>

  <div>
    <div>
      <el-dialog
      title="提示"
      :visible.sync="dialogRelease"
      width="30%"
      :before-close="handleClose">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="发布环境">
          <el-radio-group v-model="form.release">
            <el-radio label="Product"></el-radio>
            <el-radio label="UAT"></el-radio>
            <el-radio label="SIT"></el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogRelease = false">取 消</el-button>
        <el-button type="primary" @click="dialogRelease = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
  <el-table :data="tableData" style="width: 100%"
  @select="selectData"
  ref="multipleTable"
  @selection-change="handleSelectionChange">
  <el-table-column
  type="selection"
  width="55">
</el-table-column>
<el-table-column prop="date" label="日期" width="140">
</el-table-column>
<el-table-column prop="name" label="姓名" width="120">
</el-table-column>
<el-table-column prop="address" label="地址" width="300" >
</el-table-column>
<el-table-column  label="操作">
  <template slot-scope="scope">
   <el-dropdown @command="handleCommand">
    <span class="el-dropdown-link" >
      Operation
      <i class="el-icon-arrow-down el-icon--right"></i>
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item command="checkin">Checkin</el-dropdown-item>
      <el-dropdown-item command="view">View</el-dropdown-item>
      <el-dropdown-item command="edit">Edit</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>
</el-table-column>
</el-table>
<div class="block data-pagination">
  <el-pagination
  @size-change="handleSizeChange"
  @current-change="handleCurrentChange"
  :current-page="currentPage"
  :page-sizes="[100, 200, 300, 400]"
  :page-size="100"
  layout="total, sizes, prev, pager, next, jumper"
  :total="400">
</el-pagination>
</div>
</div>
</div>
</template>

<script>
import FormModuleDemo from '@/components/ElementModule/FormModule'

export default {
  components:{
    FormModuleDemo
  },
  name: 'HelloWorld',
  data () {
    this.initTableData();
    return {
      form:{
        release:'Product'
      },
      dialogRelease:false,
      addPartUrl: 'http://localhost:8081/#/addPart',
      tableData: [],
      activeIndex: '1',
      labelPosition: 'right',
      currentPage:1,
      Operation:'Operation',
      formLabelAlign: {
        name: '',
        region: '',
        type: ''
      }
    }
  },
  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？')
      .then(_ => {
        done();
      })
      .catch(_ => {});
    },
    initTableData(){
      this.$http.get('http://localhost:8081/test/tableData.json', {
        orderId: Math.random()
      })
      .then((res) => {
        this.tableData = res.body;
      }, (err) => {
        return [];
      });
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    addPart () {
      location.href = this.addPartUrl;
      console.log('addPart');
    },
    handleCommand (command) {
      this.$message('当前选择了'+command);
    },
    selectData(selection, row) {
      debugger;
      this.$message('选择了:'+selection.length+"条");
    },
    handleSelectionChange(val) {
      this.$message('选择了:'+val[0].address);
      this.multipleSelection = val;
    },
    handleSizeChange(val) {
      this.$message('当前一页显示'+val+'条');
    },
    handleCurrentChange(val) {
      this.$message('当前第'+val+'页');
    }
  },
  props: ['treeName']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
a {
  color: #42b983;
}

.el-menu-sub-btn {
  min-width : 80px;
  width: 80px;
}

.class-btn-grp {
  margin: 10px 0px 10px 30px;
  float: left;
}

.data-pagination{
  float:left;
  margin: 0 0 0 10px;
}

</style>