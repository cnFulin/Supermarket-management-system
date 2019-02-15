<template>
  <div class="sysmsg">
    <!-- 系统信息 -->
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>系统信息</span>
      </div>
      <div v-for="o in 1" :key="o" class="text item">
        <el-alert title="商品总数:5, 已经销售的总金额:890.00, 库存商品总价:1235.82" type="info" show-icon></el-alert>
        <el-alert title="导入数据" type="success" show-icon></el-alert>
      </div>

      <!-- 下面两张卡片 -->
      <el-row :gutter="20">
            <el-col :span="12">
                <!-- 左边卡片 -->
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>销售排行</span>
                    </div>
                    <div v-for="o in 1" :key="o" class="text item">
                        <!-- 左边表单 -->
                         <el-table
                                :data="topData"
                                style="width: 100%">
                                <el-table-column
                                label="商品名称"
                                width="180">
                                <template slot-scope="scope">
                                    <span style="margin-left: 10px">{{ scope.row.name }}</span>
                                </template>
                                </el-table-column>
                                <el-table-column
                                label="销量"
                                width="180">
                                <template slot-scope="scope">
                                    <div slot="reference" class="name-wrapper">
                                        <span style="margin-left: 10px">{{ scope.row.num }}</span>
                                    </div>
                                </template>
                                </el-table-column>
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

                </el-card>
            </el-col>
            <!-- 右边卡片 -->
            <el-col :span="12">
                 <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>缺货的商品</span>
                    </div>
                    <div v-for="o in 1" :key="o" class="text item">
                        <el-table
                                :data="saleData"
                                style="width: 100%">
                                <el-table-column
                                label="商品名称"
                                width="180">
                                <template slot-scope="scope">
                                    <span style="margin-left: 10px">{{ scope.row.name }}</span>
                                </template>
                                </el-table-column>
                                <el-table-column
                                label="销量"
                                width="180">
                                <template slot-scope="scope">
                                    <div slot="reference" class="name-wrapper">
                                        <span style="margin-left: 10px">{{ scope.row.num }}</span>
                                    </div>
                                </template>
                                </el-table-column>
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
                </el-card>
            </el-col>
     </el-row>
    </el-card>
  </div>
</template>


<script>
export default {
    data(){
        return{
           topData:[
               {
                   name:'海飞丝',
                   num:20
               },
               {
                   name:'飘柔',
                   num:16
               },
               {
                   name:'香飘飘',
                   num:35
               },
               {
                   name:'优乐美',
                   num:56
               },
               {
                   name:'香飘飘',
                   num:35
               },{
                   name:'香飘飘',
                   num:35
               },
           ],
           saleData:[
               {
                   name:'雀巢咖啡',
                   num:50
               },
               {
                   name:'怡宝',
                   num:38
               }
           ]
        }
    }
};
</script>


<style lang='less'>
.sysmsg {
  .el-card {
      .el-card__header{
          background-color: #ccc;
      }
      .clearfix{
          span{
              font-size: 20px;
              font-weight: 800px;
          }
      }
    .text {
      .el-alert {
        margin-bottom: 20px;
      }
    }
  }
}
</style>
