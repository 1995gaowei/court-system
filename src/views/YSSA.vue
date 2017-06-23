<template>
    <div>
        <label>时间范围：</label>
        <Date-picker type="daterange" v-model="dates" style="width: 240px;display: inline-flex;" @on-change="dateChange"></Date-picker>
        <label>选择法院：</label>
        <court-select style="width: 270px;"></court-select>

        <div>
            <h1 style="text-align: center; margin: 20px 0 10px 0;">全市法院行政一审收案情况专题分析</h1>
            <p class="reportContent">从2017年05月01日到2017年05月31日，全市法院共有行政一审审结案件<span class="number">{{ report.total }}</span>件。案件类型中，<template v-for="item in report.list">{{ item.type }}有<span class="number">{{ item.amount }}</span>件，</template>其中数量最多的为{{ report.max.type }}，占总数的<span class="number">{{ report.max.proportion }}</span>。</p>
        </div>
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
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                return [start, end];
            }
        },
        data () {
            return {
                report: {
                    "total": 350,
                    "list": [
                        {
                            "type": "判决",
                            "amount": 85
                        },
                        {
                            "type": "指定其他下级法院",
                            "amount": 0
                        },
                        {
                            "type": "终结",
                            "amount": 1
                        },
                        {
                            "type": "与本院其他案件并案审理",
                            "amount": 0
                        },
                        {
                            "type": "不予立案",
                            "amount": 124
                        },
                        {
                            "type": "驳回起诉",
                            "amount": 48
                        },
                        {
                            "type": "准予撤诉",
                            "amount": 74
                        },
                        {
                            "type": "按撤诉处理",
                            "amount": 8
                        },
                        {
                            "type": "调解",
                            "amount": 0
                        }
                    ],
                    "max": {
                        "type": "不予立案",
                        "proportion": "35%" 
                    }
                }
            }
        },
        methods: {
            dateChange (dates) {
                console.log(dates);
            }
         }
    }
</script>

<style scoped>
    .number {
        font-weight: bold;
        font-size: 18px;
    }

    .reportContent {
        font-size: 15px;
        line-height: 30px;
        text-indent: 30px;
        letter-spacing: 2px;
    }
</style>