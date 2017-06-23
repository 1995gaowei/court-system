<template>
    <div>
        <Menu :accordion="true" class="side-nav" active-name="jyqk" width="240px" @on-select="selectItem">
            <Menu-item name="spts"><img src="../assets/hammer.png" class="icon"> 审判态势</Menu-item>
            <Submenu name="saqk">
                <template slot="title">
                    <img src="../assets/edit.png" class="icon"> 
                    收案情况分析
                </template>
                <Menu-item name="yssa"><img src="../assets/paper.png" class="icon"> 一审收案</Menu-item>
                <Menu-item name="essa"><img src="../assets/copy.png" class="icon"> 二审收案</Menu-item>
            </Submenu>
            <Submenu name="jaqk">
                <template slot="title">
                    <img src="../assets/check.png" class="icon"> 
                    结案情况分析
                </template>
                <Menu-item name="ysja"><img src="../assets/paper.png" class="icon"> 一审结案</Menu-item>
                <Menu-item name="esja"><img src="../assets/copy.png" class="icon"> 二审结案</Menu-item>
            </Submenu>
            <Menu-item name="ayfx"><img src="../assets/book.png" class="icon"> 案由分析</Menu-item>
            <Submenu name="dsrss">
                <template slot="title">
                    <img src="../assets/contact.png" class="icon"> 
                    当事人涉诉分析
                </template>
                <Menu-item name="sasl"><img src="../assets/pie.png" class="icon"> 涉案数量分析</Menu-item>
                <Menu-item name="zfss"><img src="../assets/government.png" class="icon"> 市 | 区政府涉诉分析</Menu-item>
                <Menu-item name="sjjgss"><img src="../assets/flag.png" class="icon"> 市级机关涉诉分析</Menu-item>
            </Submenu>
            <Menu-item name="cqwj"><img src="../assets/time.png" class="icon"> 长期未结情况分析</Menu-item>
            <Menu-item name="wsqk"><img src="../assets/note.png" class="icon"> 文书情况分析</Menu-item>
        </Menu>

        <Button type="info" icon="chevron-left" id="side-nav-mini"></Button>
    </div>
</template>

<script>
 const sideNavs = {
     "spts": "审判态势",
     "yssa": "一审收案",
     "essa": "二审收案",
     "ysja": "一审结案",
     "esja": "二审结案",
     "ayfx": "案由分析",
     "sasl": "涉案数量分析",
     "zfss": "市 | 区政府涉诉分析",
     "sjjgss": "市级机关涉诉分析",
     "cqwj": "长期未结情况分析",
     "wsqk": "文书情况分析"
 }

  export default {
    methods: {
        selectItem (name) {
            console.log(sideNavs[name]);
            this.$store.commit('addTab', sideNavs[name]);
            this.$router.push(name);
        }
    }
  }
</script>

<style scoped>
.side-nav {
    position: fixed;
    top: 70px;
    bottom: 0;
    overflow-y: auto;
    padding-top:10px;
}

#side-nav-mini {
    position: fixed;
    top: 55%;
    left: 222px;
    padding: 10px 5px;
}

.ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu) {
    background: #f3f3f3;
    color: #495060;
}

.icon {
    height: 18px;
    margin-right: 5px;
    position: relative;
    top: 3px;
}
</style>