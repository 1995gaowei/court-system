<template>
  <div>
    <Row :gutter="16">
      <Col :span="8">
        <div id="tianjin"></div>
      </Col>

      <Col :span="16">
        <el-table :data="list" style="text-align: center; width:100%;" max-height="400" id="fyTable">
          <el-table-column label="法院" min-width="100">
            <template scope="scope">
              <span style="font-weight: bold;">{{ scope.row.fy }}</span>
            </template>
          </el-table-column>
          <el-table-column label="新收案件">
            <el-table-column label="案件数量" prop="xssl" min-width="75"></el-table-column>
            <el-table-column label="同期增长" prop="xszz" min-width="75"></el-table-column>
          </el-table-column>
          <el-table-column label="旧存案件">
            <el-table-column label="案件数量" prop="jcsl" min-width="75"></el-table-column>
            <el-table-column label="同期增长" prop="jczz" min-width="75"></el-table-column>
          </el-table-column>
          <el-table-column label="已结案件">
            <el-table-column label="案件数量" prop="yjsl" min-width="75"></el-table-column>
            <el-table-column label="同期增长" prop="yjzz" min-width="75"></el-table-column>
          </el-table-column>
          <el-table-column label="未结案件">
            <el-table-column label="案件数量" prop="wjsl" min-width="75"></el-table-column>
            <el-table-column label="同期增长" prop="wjzz" min-width="75"></el-table-column>
          </el-table-column>
        </el-table>
      </Col>
    </Row>
    <Row :gutter="16" style="margin-top: 20px;">
      <Col :span="6">
        <Card >
          <p class="title">新收案件</p>
          <p><span class="number">2023</span> 件</p>
          <div class="ivu-progress-outer">
            <div class="ivu-progress-inner">
              <div class="ivu-progress-bg" style="width: 100%; height: 10px; background-color: #2db7f5"></div>
            </div>
          </div>
          <p class="extra">同期增长 20%</p>
        </Card>
      </Col>
      <Col :span="6">
        <Card >
          <p class="title">旧存案件</p>
          <p><span class="number">20</span> 件</p>
          <div class="ivu-progress-outer">
            <div class="ivu-progress-inner">
              <div class="ivu-progress-bg" style="width: 8%; height: 10px; background-color: #ff9900"></div>
            </div>
          </div>
          <p class="extra">同期增长 20%</p>
        </Card>
      </Col>
      <Col :span="6">
        <Card >
          <p class="title">已结案件</p>
          <p><span class="number">2000</span> 件</p>
          <div class="ivu-progress-outer">
            <div class="ivu-progress-inner">
              <div class="ivu-progress-bg" style="width: 90%; height: 10px; background-color: #19be6b"></div>
            </div>
          </div>
          <p class="extra">同期增长 20%</p>
        </Card>
      </Col>
      <Col :span="6">
        <Card >
          <p class="title">未结案件</p>
          <p><span class="number">3</span> 件</p>
          <div class="ivu-progress-outer">
            <div class="ivu-progress-inner">
              <div class="ivu-progress-bg" style="width: 2%; height: 10px; background-color: #ed3f14"></div>
            </div>
          </div>
          <p class="extra">同期增长 20%</p>
        </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
const test = {
  '蓟县': {
    data1: 10,
    data2: 20,
    data3: 30
  }
}
export default {
  name: 'hello',
  data () {
    return {
      list: [
        { fy: '天津市最高院', 'xssl': 2023, 'xszz': '20.4%', 'jcsl': 20, 'jczz': '20.3%', 'yjsl': 2000, 'yjzz': '20%', 'wjsl': 3, 'wjzz': '2%' }, { fy: '天津市最高院', 'xssl': 2023, 'xszz': '20.4%', 'jcsl': 20, 'jczz': '20.3%', 'yjsl': 2000, 'yjzz': '20%', 'wjsl': 3, 'wjzz': '2%' }, { fy: '天津市最高院', 'xssl': 2023, 'xszz': '20.4%', 'jcsl': 20, 'jczz': '20.3%', 'yjsl': 2000, 'yjzz': '20%', 'wjsl': 3, 'wjzz': '2%' }, { fy: '天津市最高院', 'xssl': 2023, 'xszz': '20.4%', 'jcsl': 20, 'jczz': '20.3%', 'yjsl': 2000, 'yjzz': '20%', 'wjsl': 3, 'wjzz': '2%' }, { fy: '天津市最高院', 'xssl': 2023, 'xszz': '20.4%', 'jcsl': 20, 'jczz': '20.3%', 'yjsl': 2000, 'yjzz': '20%', 'wjsl': 3, 'wjzz': '2%' }, { fy: '天津市最高院', 'xssl': 2023, 'xszz': '20.4%', 'jcsl': 20, 'jczz': '20.3%', 'yjsl': 2000, 'yjzz': '20%', 'wjsl': 3, 'wjzz': '2%' }, { fy: '天津市最高院', 'xssl': 2023, 'xszz': '20.4%', 'jcsl': 20, 'jczz': '20.3%', 'yjsl': 2000, 'yjzz': '20%', 'wjsl': 3, 'wjzz': '2%' }, { fy: '天津市最高院', 'xssl': 2023, 'xszz': '20.4%', 'jcsl': 20, 'jczz': '20.3%', 'yjsl': 2000, 'yjzz': '20%', 'wjsl': 3, 'wjzz': '2%' }, { fy: '天津市最高院', 'xssl': 2023, 'xszz': '20.4%', 'jcsl': 20, 'jczz': '20.3%', 'yjsl': 2000, 'yjzz': '20%', 'wjsl': 3, 'wjzz': '2%' }, { fy: '天津市最高院', 'xssl': 2023, 'xszz': '20.4%', 'jcsl': 20, 'jczz': '20.3%', 'yjsl': 2000, 'yjzz': '20%', 'wjsl': 3, 'wjzz': '2%' }, { fy: '天津市最高院', 'xssl': 2023, 'xszz': '20.4%', 'jcsl': 20, 'jczz': '20.3%', 'yjsl': 2000, 'yjzz': '20%', 'wjsl': 3, 'wjzz': '2%' }, { fy: '天津市最高院', 'xssl': 2023, 'xszz': '20.4%', 'jcsl': 20, 'jczz': '20.3%', 'yjsl': 2000, 'yjzz': '20%', 'wjsl': 3, 'wjzz': '2%' }, { fy: '天津市最高院', 'xssl': 2023, 'xszz': '20.4%', 'jcsl': 20, 'jczz': '20.3%', 'yjsl': 2000, 'yjzz': '20%', 'wjsl': 3, 'wjzz': '2%' }, { fy: '天津市最高院', 'xssl': 2023, 'xszz': '20.4%', 'jcsl': 20, 'jczz': '20.3%', 'yjsl': 2000, 'yjzz': '20%', 'wjsl': 3, 'wjzz': '2%' }, { fy: '天津市最高院', 'xssl': 2023, 'xszz': '20.4%', 'jcsl': 20, 'jczz': '20.3%', 'yjsl': 2000, 'yjzz': '20%', 'wjsl': 3, 'wjzz': '2%' }, { fy: '天津市最高院', 'xssl': 2023, 'xszz': '20.4%', 'jcsl': 20, 'jczz': '20.3%', 'yjsl': 2000, 'yjzz': '20%', 'wjsl': 3, 'wjzz': '2%' }, { fy: '天津市最高院', 'xssl': 2023, 'xszz': '20.4%', 'jcsl': 20, 'jczz': '20.3%', 'yjsl': 2000, 'yjzz': '20%', 'wjsl': 3, 'wjzz': '2%' }, { fy: '天津市最高院', 'xssl': 2023, 'xszz': '20.4%', 'jcsl': 20, 'jczz': '20.3%', 'yjsl': 2000, 'yjzz': '20%', 'wjsl': 3, 'wjzz': '2%' }
      ],
      options1: {
        tooltip: {
          trigger: 'item',
          formatter: (params) => {
            if (params.data.value1) {
              return params.name+'<br />新收 '+params.data.value1+'&nbsp;&nbsp;旧存 '+params.data.value2+'&nbsp;&nbsp;已结 '+params.data.value3+'&nbsp;&nbsp;未结 '+params.data.value4
            } else {
              return params.name
            }
          }
        },
        series: [{
          roam: true,
          zoom: 1.2,
          name: '销量',
          type: 'map',
          mapType: 'tianjin',
          data: [
            {name: '蓟县', value1: 100, value2: 200, value3: 300, value4: 400}
          ],
          itemStyle: {
            normal: {
              areaColor: '#2db7f5',
              borderColor: '#fff'
            }
          }
        }]
      }
    }
  },
  mounted () {
    this.tianjinChart = this.$echarts.init(document.getElementById('tianjin'));
    this.tianjinChart.setOption(this.options1);
  }
}
</script>

<style scoped>
  #tianjin {
    height: 400px;
  }

.title {
  font-weight: bold;
}

.number {
  font-size: 25px;
  color:  #ff4949;
}
.extra {
  color: #888;
  margin-top: 5px;
}

.ivu-card-bordered {
    border: 1px solid #2db7f5;
    border-color: #2db7f5;
}

.ivu-card:hover {
    box-shadow: 0 1px 6px rgba(0,0,0,.2);
    border-color: #2db7f5;
}

</style>