<template>
<div>
    <Tabs type="card" @on-tab-remove="removeTab" @on-click="chooseTab" :value="activeTab">
        <Tab-pane label="主页" name="主页"></Tab-pane>
        <Tab-pane v-for="(item, index) in tabs" :label="item" :name="item" :key="item" closable></Tab-pane>
    </Tabs>
</div>
</template>

<script>
    import { mapState } from 'vuex'

    const optionTabs = {
        "主页": "home",
        "审判态势": "spts",
        "一审收案": "yssa",
        "二审收案": "essa",
        "一审结案": "ysja",
        "二审结案": "esja",
        "案由分析": "ayfx",
        "涉案数量分析": "sasl",
        "市 | 区政府涉诉分析": "zfss",
        "市级机关涉诉分析": "sjjgss",
        "长期未结情况分析": "cqwj",
        "文书情况分析": "wsqk"
    }

    export default {
        computed: mapState([
            'activeTab', 'tabs'
        ]),
        methods: {
            removeTab (tab) {
                this.$store.commit('removeTab', tab)
                if (this.tabs.length == 0) {
                    this.$router.push('home')
                } else {
                    this.$router.push(optionTabs[this.tabs[this.tabs.length-1]])
                }
            },
            chooseTab (tab) {
                this.$router.push(optionTabs[tab]);
            }
        }
    }
</script>