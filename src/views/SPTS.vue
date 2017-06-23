<template>
    <div>
        <label>时间范围：</label>
        <Date-picker type="daterange" :value="dates" style="width: 240px;display: inline-flex;" @on-change="dateChange"></Date-picker>
        <label>选择法院：</label>
        <court-select style="width: 270px;"></court-select>

        <el-table :data="courtData" style="width: 100%; text-align: center;margin-top: 16px;" id="SPTSCourtTable">
            <el-table-column type="index" label="#" width="60"></el-table-column>
            <el-table-column prop="fy" label="法院"></el-table-column>
            <el-table-column prop="xssl" label="新收案件" width="100"></el-table-column>
            <el-table-column prop="jcsl" label="旧存案件" width="100"></el-table-column>
            <el-table-column prop="wjsl" label="在办案件" width="100"></el-table-column>
            <el-table-column prop="yjsl" label="已结案件" width="100"></el-table-column>
            <el-table-column prop="xszz" label="结案率" width="100"></el-table-column>
        </el-table>
    </div>
</template>

<script>
    import CourtSelect from '@/components/CourtSelect'

    export default {
        components: {
            CourtSelect
        },
        computed: {
            dates () {
                return ['2017-01-01', '2017-05-31']
            }
        },
        data () {
            return {
                courtData: [
                    { fy: '天津市最高院', 'xssl': 2023, 'xszz': '20.4%', 'jcsl': 20, 'jczz': '20.3%', 'yjsl': 2000, 'yjzz': '20%', 'wjsl': 3, 'wjzz': '2%' }, { fy: '天津市最高院', 'xssl': 2023, 'xszz': '20.4%', 'jcsl': 20, 'jczz': '20.3%', 'yjsl': 2000, 'yjzz': '20%', 'wjsl': 3, 'wjzz': '2%' }, { fy: '天津市最高院', 'xssl': 2023, 'xszz': '20.4%', 'jcsl': 20, 'jczz': '20.3%', 'yjsl': 2000, 'yjzz': '20%', 'wjsl': 3, 'wjzz': '2%' }, { fy: '天津市最高院', 'xssl': 2023, 'xszz': '20.4%', 'jcsl': 20, 'jczz': '20.3%', 'yjsl': 2000, 'yjzz': '20%', 'wjsl': 3, 'wjzz': '2%' }, { fy: '天津市最高院', 'xssl': 2023, 'xszz': '20.4%', 'jcsl': 20, 'jczz': '20.3%', 'yjsl': 2000, 'yjzz': '20%', 'wjsl': 3, 'wjzz': '2%' }, { fy: '天津市最高院', 'xssl': 2023, 'xszz': '20.4%', 'jcsl': 20, 'jczz': '20.3%', 'yjsl': 2000, 'yjzz': '20%', 'wjsl': 3, 'wjzz': '2%' }, { fy: '天津市最高院', 'xssl': 2023, 'xszz': '20.4%', 'jcsl': 20, 'jczz': '20.3%', 'yjsl': 2000, 'yjzz': '20%', 'wjsl': 3, 'wjzz': '2%' }, { fy: '天津市最高院', 'xssl': 2023, 'xszz': '20.4%', 'jcsl': 20, 'jczz': '20.3%', 'yjsl': 2000, 'yjzz': '20%', 'wjsl': 3, 'wjzz': '2%' }, { fy: '天津市最高院', 'xssl': 2023, 'xszz': '20.4%', 'jcsl': 20, 'jczz': '20.3%', 'yjsl': 2000, 'yjzz': '20%', 'wjsl': 3, 'wjzz': '2%' }, { fy: '天津市最高院', 'xssl': 2023, 'xszz': '20.4%', 'jcsl': 20, 'jczz': '20.3%', 'yjsl': 2000, 'yjzz': '20%', 'wjsl': 3, 'wjzz': '2%' }, { fy: '天津市最高院', 'xssl': 2023, 'xszz': '20.4%', 'jcsl': 20, 'jczz': '20.3%', 'yjsl': 2000, 'yjzz': '20%', 'wjsl': 3, 'wjzz': '2%' }, { fy: '天津市最高院', 'xssl': 2023, 'xszz': '20.4%', 'jcsl': 20, 'jczz': '20.3%', 'yjsl': 2000, 'yjzz': '20%', 'wjsl': 3, 'wjzz': '2%' }, { fy: '天津市最高院', 'xssl': 2023, 'xszz': '20.4%', 'jcsl': 20, 'jczz': '20.3%', 'yjsl': 2000, 'yjzz': '20%', 'wjsl': 3, 'wjzz': '2%' }, { fy: '天津市最高院', 'xssl': 2023, 'xszz': '20.4%', 'jcsl': 20, 'jczz': '20.3%', 'yjsl': 2000, 'yjzz': '20%', 'wjsl': 3, 'wjzz': '2%' }, { fy: '天津市最高院', 'xssl': 2023, 'xszz': '20.4%', 'jcsl': 20, 'jczz': '20.3%', 'yjsl': 2000, 'yjzz': '20%', 'wjsl': 3, 'wjzz': '2%' }, { fy: '天津市最高院', 'xssl': 2023, 'xszz': '20.4%', 'jcsl': 20, 'jczz': '20.3%', 'yjsl': 2000, 'yjzz': '20%', 'wjsl': 3, 'wjzz': '2%' }, { fy: '天津市最高院', 'xssl': 2023, 'xszz': '20.4%', 'jcsl': 20, 'jczz': '20.3%', 'yjsl': 2000, 'yjzz': '20%', 'wjsl': 3, 'wjzz': '2%' }, { fy: '天津市最高院', 'xssl': 2023, 'xszz': '20.4%', 'jcsl': 20, 'jczz': '20.3%', 'yjsl': 2000, 'yjzz': '20%', 'wjsl': 3, 'wjzz': '2%' }
                ]
            }
        },
        methods: {
            dateChange (dates) {
                console.log(dates);
            }
         }
    }
</script>