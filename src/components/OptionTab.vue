<template>
<div>
    <Tabs type="card" @on-tab-remove="removeTab" :value="activeTab">
        <Tab-pane label="主页" name="主页"></Tab-pane>
        <Tab-pane v-for="(item, index) in tabs" :label="item" :name="item" :key="item" closable></Tab-pane>
    </Tabs>
</div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        computed: mapState([
            'activeTab', 'tabs'
        ]),
        methods: {
            removeTab (tab) {
                this.$store.dispatch('removeTab', tab)
            }
        }
    }
</script>