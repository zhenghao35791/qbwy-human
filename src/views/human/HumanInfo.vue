<template>
  <div class="human-info">
    <el-tabs
      v-model="activeNameTab"
      type="card"
      @tab-click="handleClick"
      class="human-top-tab">
      <el-tab-pane
        label="在职员工列表"
        name="firstTab"
        class="first-tab-content">
        <el-form
          :inline="true"
          :model="humanTopFormInline"
          class="demo-form-inline">
          <el-form-item label="所属分组">
            <el-select
              v-model="humanTopFormInline.group"
              placeholder="所属分组">
              <el-option
                label="区域一"
                value="shanghai"/>
              <el-option
                label="区域二"
                value="beijing"/>
            </el-select>
          </el-form-item>
          <el-form-item label="所属组织">
            <el-select
              v-model="humanTopFormInline.org"
              placeholder="所属组织">
              <el-option
                label="区域一"
                value="shanghai"/>
              <el-option
                label="区域二"
                value="beijing"/>
            </el-select>
          </el-form-item>
          <el-form-item label="员工标签">
            <el-select
              v-model="humanTopFormInline.tag"
              placeholder="员工标签">
              <el-option
                label="区域一"
                value="shanghai"/>
              <el-option
                label="区域二"
                value="beijing"/>
            </el-select>
          </el-form-item>
          <el-form-item
            label="入职日期"
          >
            <el-col :span="11">
              <el-form-item prop="entryDate1">
                <el-date-picker
                  type="date"
                  placeholder="选择日期"
                  v-model="humanTopFormInline.entryDate1"
                  style="width: 100%;"/>
              </el-form-item>
            </el-col>
            <el-col
              class="line"
              :span="1">-</el-col>
            <el-col :span="11">
              <el-form-item prop="entryDate2">
                <el-date-picker
                  type="date"
                  placeholder="选择日期"
                  v-model="humanTopFormInline.entryDate2"
                  style="width: 100%;"/>
              </el-form-item>
            </el-col>
          </el-form-item>
          <el-form-item label="身份证号">
            <el-input
              v-model="humanTopFormInline.idcard"
              placeholder="身份证号"/>
          </el-form-item>
          <el-form-item label="员工姓名">
            <el-input
              v-model="humanTopFormInline.name"
              placeholder="员工姓名"/>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              @click="onSubmit">搜索</el-button>
            <el-button
              type="primary"
              @click="onSubmit">显示字段</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane
        label="离职员工列表"
        name="secondTab">离职员工列表</el-tab-pane>
      <el-tab-pane
        label="待入职员工列表"
        name="thirdTab">待入职员工列表</el-tab-pane>
      <el-tab-pane
        label="待离职员工列表"
        name="fourthTab">待离职员工列表</el-tab-pane>
      <el-tab-pane
        label="资料导出模板"
        name="fifthTab">资料导出模板</el-tab-pane>
    </el-tabs>
    <div class="human-info-table-wrapper">
      <el-table
        :data="tableData5"
        style="width: 100%"
        @selection-change="handleSelectionChange">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form
              label-position="left"
              inline
              class="demo-table-expand">
              <el-form-item label="商品名称">
                <span>{{ props.row.name }}</span>
              </el-form-item>
              <el-form-item label="所属店铺">
                <span>{{ props.row.shop }}</span>
              </el-form-item>
              <el-form-item label="商品 ID">
                <span>{{ props.row.id }}</span>
              </el-form-item>
              <el-form-item label="店铺 ID">
                <span>{{ props.row.shopId }}</span>
              </el-form-item>
              <el-form-item label="商品分类">
                <span>{{ props.row.category }}</span>
              </el-form-item>
              <el-form-item label="店铺地址">
                <span>{{ props.row.address }}</span>
              </el-form-item>
              <el-form-item label="商品描述">
                <span>{{ props.row.desc }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column
          type="selection"
          width="55"/>
        <el-table-column
          label="序号"
          type="index"
          :index="indexMethod"/>
        <el-table-column
          label="商品 ID"
          prop="id"/>
        <el-table-column
          label="商品名称"
          prop="name"/>
        <el-table-column
          label="描述"
          prop="desc"/>
      </el-table>
      <div class="human-btns-wrapper">
        <el-button-group>
          <el-button
            size="small"
            type="primary"
            icon="el-icon-edit">离职</el-button>
          <el-button
            size="small"
            type="primary"
            icon="el-icon-share">标签</el-button>
          <el-button
            size="small"
            type="primary"
            icon="el-icon-delete">分组</el-button>
          <el-button
            size="small"
            type="primary"
            icon="el-icon-delete">变更组织</el-button>
          <el-button
            size="small"
            type="primary"
            icon="el-icon-delete">下载附件</el-button>
          <el-button
            size="small"
            type="primary"
            icon="el-icon-delete">导出资料</el-button>
        </el-button-group>
        <div class="pagination-block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import api from '@/api'
import mixin from '@/mixins/mixin'

export default {
  mixins: [mixin], // 使用mixins
  data () {
    return {
      activeNameTab: 'firstTab',
      currentPage4: 4,
      humanTopFormInline: {
        idcard: '',
        name: '',
        tag: '',
        entryDate1: '',
        entryDate2: '',
        group: '',
        org: ''
      },
      tableData5: [{
        id: '12987122',
        name: '好滋好味鸡蛋仔',
        category: '江浙小吃、小吃零食',
        desc: '荷兰优质淡奶，奶香浓而不腻',
        address: '上海市普陀区真北路',
        shop: '王小虎夫妻店',
        shopId: '10333'
      }, {
        id: '12987123',
        name: '好滋好味鸡蛋仔',
        category: '江浙小吃、小吃零食',
        desc: '荷兰优质淡奶，奶香浓而不腻',
        address: '上海市普陀区真北路',
        shop: '王小虎夫妻店',
        shopId: '10333'
      }, {
        id: '12987125',
        name: '好滋好味鸡蛋仔',
        category: '江浙小吃、小吃零食',
        desc: '荷兰优质淡奶，奶香浓而不腻',
        address: '上海市普陀区真北路',
        shop: '王小虎夫妻店',
        shopId: '10333'
      }, {
        id: '12987126',
        name: '好滋好味鸡蛋仔',
        category: '江浙小吃、小吃零食',
        desc: '荷兰优质淡奶，奶香浓而不腻',
        address: '上海市普陀区真北路',
        shop: '王小虎夫妻店',
        shopId: '10333'
      }]
    }
  },
  computed: {},
  components: {
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    },
    onSubmit () {
      console.log('submit!')
    },
    indexMethod (index) {
      return index + 1
    },
    toggleSelection (rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  },
  created () {
  }
}
</script>

<style lang="scss" scoped>
  .human-info{
    .human-top-tab{
      margin: 20px;
      .first-tab-content{
      }
    }
    .human-info-table-wrapper{
      .human-btns-wrapper{
        margin: 40px 20px;
        .pagination-block{
          float: right;
        }
      }
    }
    .demo-table-expand {
      font-size: 0;
    }
    .demo-table-expand label {
      width: 90px;
      color: #99a9bf;
    }
    .demo-table-expand .el-form-item {
      margin-right: 0;
      margin-bottom: 0;
      width: 50%;
    }
  }

</style>
