<template>
  <div class="human-info">
    <el-tabs
      v-model="activeNameTab"
      type="card"
      @tab-click="handleClick"
      class="human-top-tab">
      <el-tab-pane
        name="firstTab"
        class="first-tab-content">
        <span slot="label"><i class="el-icon-date"/> 在职员工列表</span>
        <el-form
          :inline="true"
          :model="humanTopFormInline"
          class="demo-form-inline">
          <el-form-item label="请选择">
            <el-select
              clearable
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
              clearable
              v-model="humanTopFormInline.org"
              placeholder="请选择">
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
              clearable
              v-model="humanTopFormInline.tag"
              placeholder="请选择">
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
                  placeholder="起始日期"
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
                  placeholder="结束日期"
                  v-model="humanTopFormInline.entryDate2"
                  style="width: 100%;"/>
              </el-form-item>
            </el-col>
          </el-form-item>
          <el-form-item label="身份证号">
            <el-input
              v-model="humanTopFormInline.idcard"
              placeholder="请输入.."/>
          </el-form-item>
          <el-form-item label="员工姓名">
            <el-input
              v-model="humanTopFormInline.name"
              placeholder="请输入.."/>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              size="small"
              icon="el-icon-search"
              @click="onSubmit">搜索</el-button>
            <el-button
              type="primary"
              size="small"
              icon="el-icon-star-off"
              @click="onSubmit">显示字段</el-button>
          </el-form-item>
        </el-form>
        <div class="human-info-table-wrapper">
          <el-table
            :data="humanTableData"
            stripe
            style="width: 100%"
            @selection-change="handleSelectionChange">
            <el-table-column
              type="selection"
              width="40"/>
            <el-table-column type="expand">
              <template slot-scope="props">
                <el-form
                  label-position="middle"
                  inline
                  class="demo-table-expand">
                  <el-form-item label="身份证号">
                    <span>{{ props.row.idCard }}</span>
                  </el-form-item>
                  <el-form-item label="实名认证">
                    <span>{{ props.row.realname }}</span>
                  </el-form-item>
                  <el-form-item label="民族籍贯">
                    <span>{{ props.row.nation }}</span>
                  </el-form-item>
                  <el-form-item label="银行卡号">
                    <span>{{ props.row.bankCard }}</span>
                  </el-form-item>
                  <el-form-item label="所属分组">
                    <span>{{ props.row.group }}</span>
                  </el-form-item>
                  <el-form-item label="所属组织">
                    <span>{{ props.row.org }}</span>
                  </el-form-item>
                </el-form>
              </template>
            </el-table-column>
            <el-table-column
              label="序号"
              type="index"
              :index="indexMethod"/>
            <el-table-column
              label="日期"
            >
              <template slot-scope="scope">
                <span>{{ scope.row.date }}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="身份证号"
              prop="idCard">
              <template slot-scope="scope">
                <el-popover
                  trigger="hover"
                  placement="top">
                  <p>{{ scope.row.idCard }}</p>
                  <p>{{ scope.row.idCardSecond }}</p>
                  <div
                    slot="reference"
                    class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.idCard }}</el-tag>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              label="实名认证"
              prop="realname"/>
            <el-table-column
              label="有无社保"
              prop="hasSecurity">
              <template slot-scope="scope">
                <el-switch
                  v-model="scope.row.hasSecurity"
                  active-text="有"
                />
              </template>
            </el-table-column>
            <el-table-column
              label="入离职审批"
              prop="hasApprove">
              <template slot-scope="scope">
                <el-switch
                  v-model="scope.row.hasApprove"
                  active-text="开"
                />
              </template>
            </el-table-column>
            <el-table-column
              label="民族/籍贯"
              prop="nation"/>
            <el-table-column
              label="联系电话/所在地址"
              prop="phoneNum"
              :show-overflow-tooltip="true"
            />
            <el-table-column
              label="银行卡号"
              prop="bankCard"/>
            <el-table-column
              label="所属分组"
              prop="group"/>
            <el-table-column
              label="所属组织"
              :show-overflow-tooltip="true"
              prop="org"/>
            <el-table-column
              fixed="right"
              label="操作"
              width="200">
              <template slot-scope="scope">
                <el-button
                  @click="handleClick(scope.row)"
                  type="text"
                  size="small">资料</el-button>
                <el-button
                  type="text"
                  size="small"
                  @click="dialogContractTableVisible = true"
                >合同</el-button>
                <el-button
                  type="text"
                  size="small">评语</el-button>
                <el-button
                  type="text"
                  size="small">共享</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div class="human-btns-wrapper">
            <el-button-group>
              <el-button
                size="small"
                type="primary"
                icon="el-icon-date">离职</el-button>
              <el-button
                size="small"
                type="primary"
                icon="el-icon-edit-outline">标签</el-button>
              <el-button
                size="small"
                type="primary"
                icon="el-icon-document">分组</el-button>
              <el-button
                size="small"
                type="primary"
                icon="el-icon-share">变更组织</el-button>
              <el-button
                size="small"
                type="primary"
                icon="el-icon-download">下载附件</el-button>
              <el-button
                size="small"
                type="primary"
                icon="el-icon-upload2">导出资料</el-button>
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
        name="fifthTab">
        <el-button
          type="primary"
          size="small"
          icon="el-icon-circle-plus"
          @click="onSubmit">添加模板</el-button>
        <div class="human-info-table-wrapper">
          <el-table
            :data="exportTemplateData"
            stripe
            style="width: 100%"
            :default-sort = "{prop: 'index', order: 'descending'}"
            @selection-change="handleSelectionChange">
            <el-table-column
              label="序号"
              prop="index"
              type="index"
              :index="indexMethod"/>
            <el-table-column
              label="模板名称"
              sortable
              prop="modelName"
            />
            <el-table-column
              label="基本信息"
              prop="basicInfo"
              :show-overflow-tooltip="true"
            />
            <el-table-column
              label="员工字段"
              prop="employeeField"
              :show-overflow-tooltip="true"
            />
            <el-table-column
              label="组长字段"
              prop="groupField"
              :show-overflow-tooltip="true"
            />
            <el-table-column
              label="经理字段"
              prop="managerField"
              :show-overflow-tooltip="true"
            />
            <el-table-column
              label="显示排序"
              prop="showSort"
              :show-overflow-tooltip="true"
            />
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-tab-pane>
    </el-tabs>
    <el-dialog
      title="员工合同"
      :visible.sync="dialogContractTableVisible">
      <el-table
        :data="contractTableData"
        stripe>
        <el-table-column
          property="contractNum"
          label="合同编号"/>
        <el-table-column
          property="contractType"
          label="合同类型"/>
        <el-table-column
          property="startTime"
          label="发起时间"/>
        <el-table-column
          property="signTime"
          label="签约时间"/>
        <el-table-column
          property="signOrg"
          label="签约组织"/>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="text"
              @click="handleEdit(scope.$index, scope.row)">下载pdf</el-button>
            <el-button
              size="mini"
              type="text"
              @click="handleDelete(scope.$index, scope.row)">下载png</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-dialog>
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
      humanTableData: [
        {
          date: '2018-12-19',
          idCard: '340323199712151721',
          idCardSecond: '王老五 [女 / 21岁]',
          realname: '资料不匹配 ',
          hasSecurity: false,
          hasApprove: true,
          nation: '汉 / 昆山',
          phoneNum: '18*******430\n' +
          '湖南省 长沙市 芙蓉区\n' +
          '江苏省昆山市玉山********7幢302室',
          bankCard: '62284*********0874\n' +
          '[农行]',
          group: '[G003]昆山北门路店',
          org: '上海瀛幸信息科技有限公司'
        },
        {
          date: '2018-12-19',
          idCard: '340323199712151721',
          idCardSecond: '王老五 [女 / 21岁]',
          realname: '资料不匹配 ',
          hasSecurity: false,
          hasApprove: true,
          nation: '汉 / 昆山',
          phoneNum: '18*******430\n' +
          '湖南省 长沙市 芙蓉区\n' +
          '江苏省昆山市玉山********7幢302室',
          bankCard: '62284*********0874\n' +
          '[农行]',
          group: '[G003]昆山北门路店',
          org: '上海瀛幸信息科技有限公司'
        },
        {
          date: '2018-12-19',
          idCard: '340323199712151721',
          idCardSecond: '王老五 [女 / 21岁]',
          realname: '资料不匹配 ',
          hasSecurity: false,
          hasApprove: true,
          nation: '汉 / 昆山',
          phoneNum: '18*******430\n' +
          '湖南省 长沙市 芙蓉区\n' +
          '江苏省昆山市玉山********7幢302室',
          bankCard: '62284*********0874\n' +
          '[农行]',
          group: '[G003]昆山北门路店',
          org: '上海瀛幸信息科技有限公司'
        }
      ],
      exportTemplateData: [
        {
          modelName: '模板一号',
          basicInfo: '银行卡号  出生日期  第三方工号  入职日期  详细地址  所在地区  开户银行  所属分组  所属组织  姓名  年龄  身份证号  性别 ',
          employeeField: '入职日期  所属组织  性别 ',
          groupField: '民族  银行卡号 ',
          managerField: '入职日期  籍贯  详细地址  开户银行',
          showSort: '10'
        },
        {
          modelName: '模板二号',
          basicInfo: '银行卡号  出生日期  第三方工号  入职日期  详细地址  所在地区  开户银行  所属分组  所属组织  姓名  年龄  身份证号  性别 ',
          employeeField: '入职日期  所属组织  性别 ',
          groupField: '民族  银行卡号 ',
          managerField: '入职日期  籍贯  详细地址  开户银行',
          showSort: '10'
        },
        {
          modelName: '模板三号',
          basicInfo: '银行卡号  出生日期  第三方工号  入职日期  详细地址  所在地区  开户银行  所属分组  所属组织  姓名  年龄  身份证号  性别 ',
          employeeField: '入职日期  所属组织  性别 ',
          groupField: '民族  银行卡号 ',
          managerField: '入职日期  籍贯  详细地址  开户银行',
          showSort: '10'
        }
      ],
      contractTableData: [
        {
          contractNum: 'C000000211000001XE',
          contractType: '瀛幸合同',
          startTime: '2018-11-18 21:38',
          signTime: '2018-11-18 21:38',
          signOrg: '上海瀛幸信息科技有限公司'
        },
        {
          contractNum: 'C000000211000001XE',
          contractType: '瀛幸合同',
          startTime: '2018-11-18 21:38',
          signTime: '2018-11-18 21:38',
          signOrg: '上海瀛幸信息科技有限公司'
        },
        {
          contractNum: 'C000000211000001XE',
          contractType: '瀛幸合同',
          startTime: '2018-11-18 21:38',
          signTime: '2018-11-18 21:38',
          signOrg: '上海瀛幸信息科技有限公司'
        }
      ],
      dialogContractTableVisible: false
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

<style lang="scss">
  .human-info{
    .human-top-tab{
      margin: 20px;
      .first-tab-content{
      }
    }
    .human-info-table-wrapper{
      .human-btns-wrapper{
        margin: 40px 50px;
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
  .el-tabs--card>.el-tabs__header .el-tabs__item.is-active {
    border-bottom-color: #fff;
    background-color: #fff !important;
  }
  .el-tabs__item{
    background-color: #f4f6fa !important;
  }
  .el-table th{
    background-color: #f4f6fa !important;
  }
</style>
