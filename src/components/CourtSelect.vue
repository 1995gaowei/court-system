<template>
    <Select v-model="court" filterable @on-change="selectCourt">
        <Option value="1" label="天津市最高人民法院"><span style="font-size: 18px;">天津市最高人民法院</span></Option>
        <Option value="2" label="天津市第一中级人民法院"><span style="font-size: 18px;">天津市第一中级人民法院</span></Option>
        <Option v-for="item in court1List" :value="item.value" :key="item" style="padding-left: 35px;">{{ item.label }}</Option>
        <Option value="13" label="天津市第二中级人民法院"><span style="font-size: 18px;">天津市第二中级人民法院</span></Option>
        <Option v-for="item in court2List" :value="item.value" :key="item" style="padding-left: 35px">{{ item.label }}</Option>
        <Option value="24" label="天津海事法院"><span style="font-size: 18px;">天津海事法院</span></Option>
        <Option value="25" label="天津铁路运输法院"><span style="font-size: 18px;">天津铁路运输法院</span></Option>
    </Select>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        computed: mapState([
            'court'
        ]),
        data () {
            return {
                court1List: [
                    {
                        value: '3',
                        label: '和平区法院'
                    },
                    {
                        value: '4',
                        label: '南开区法院'
                    },
                    {
                        value: '5',
                        label: '河北区法院'
                    },
                    {
                        value: '6',
                        label: '红桥区法院'
                    },
                    {
                        value: '7',
                        label: '西青区法院'
                    },
                    {
                        value: '8',
                        label: '北辰区法院'
                    },
                    {
                        value: '9',
                        label: '武清区法院'
                    },
                    {
                        value: '10',
                        label: '静海县法院'
                    },
                    {
                        value: '11',
                        label: '宝坻区法院'
                    },
                    {
                        value: '12',
                        label: '蓟州区法院'
                    }
                ],
                court2List: [
                    {
                        value: '14',
                        label: '滨海新区法院'
                    },
                    {
                        value: '15',
                        label: '河东区法院'
                    },
                    {
                        value: '16',
                        label: '河西区法院'
                    },
                    {
                        value: '17',
                        label: '塘沽区法院'
                    },
                    {
                        value: '18',
                        label: '汉沽区法院'
                    },
                    {
                        value: '19',
                        label: '大港区法院'
                    },
                    {
                        value: '20',
                        label: '东丽区法院'
                    },
                    {
                        value: '21',
                        label: '津南区法院'
                    },
                    {
                        value: '22',
                        label: '宁河县法院'
                    },
                    {
                        value: '23',
                        label: '经济技术开发区法院'
                    }
                ]
            }
        },
        methods: {
            selectCourt (court) {
                console.log(court);
                this.$store.commit('changeCourt', court);
            }
        }
    }
</script>