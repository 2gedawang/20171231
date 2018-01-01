<template>
  <div style="width:600px;margin:80px auto;">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="活动名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select v-model="form.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="活动时间">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="即时配送">
        <el-switch v-model="form.delivery"></el-switch>
      </el-form-item>
      <el-form-item label="活动性质">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
          <el-checkbox label="地推活动" name="type"></el-checkbox>
          <el-checkbox label="线下主题活动" name="type"></el-checkbox>
          <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="特殊资源">
        <el-radio-group v-model="form.resource">
          <el-radio label="线上品牌商赞助"></el-radio>
          <el-radio label="线下场地免费"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="条件选择">
        <el-transfer
        filterable
        :filter-method="filterMethod"
        filter-placeholder="请输入城市拼音"
        v-model="form.tValue"
        :data="transferData">
      </el-transfer>
    </el-form-item>

    <el-form-item label="特殊资源">
      <el-upload
      class="upload-demo"
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      multiple
      :limit="3"
      :on-exceed="handleExceed"
      :file-list="form.fileList">
      <el-button size="small" type="primary">点击上传</el-button>
      <span slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</span>
    </el-upload>
  </el-form-item>
  <el-form-item label="活动形式">
    <el-input type="textarea" v-model="form.desc"></el-input>
  </el-form-item>


  <el-form-item>
    <el-button type="primary" @click="onSubmit">立即创建</el-button>
    <el-button @click="onCancel" >取消</el-button>
  </el-form-item>
</el-form>
</div>
</template>


<script>
export default {
  data() {
    const generateData = _ => {
      const data = [];
      const cities = ['上海', '北京', '广州', '深圳', '南京', '西安', '成都'];
      const pinyin = ['shanghai', 'beijing', 'guangzhou', 'shenzhen', 'nanjing', 'xian', 'chengdu'];
      cities.forEach((city, index) => {
        data.push({
          label: city,
          key: index,
          pinyin: pinyin[index]
        });
      });
      return data;
    };
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        fileList: [{name: 'food.jpeg', url: 'http://www-file.huawei.com/-/media/CORPORATE/Images/home/event/2017/event-mwc.jpg?h=184&la=zh&w=420'}, 
        {name: 'food2.jpeg', url: 'http://www-file.huawei.com/-/media/CORPORATE/Images/home/event/2017/mbbf2017.jpg?h=184&la=zh&w=420'}],
        tValue: [],
        desc: ''
      },
      transferData: generateData(),
      filterMethod(query, item) {
        return item.pinyin.indexOf(query) > -1;
      },
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!'+form);
    },
    onCancel(){
      location.href = '/';
    },
    //上传文件的相关方法--开始
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${ file.name }？`);
    }
    //上传文件的相关方法--结束
  }
}
</script>