<template>
        <Row type="flex" align="middle" class="header">
            <Col :xs="20">
                <img src="../assets/logo.png" alt="logo" class="logo">
                <p class="title">天津法院大数据分析平台—行政子平台</p>
            </Col>
            <Col :xs="4" style="text-align: center;">
                <Dropdown @on-click="handleUserDropdown">
                    <div class="user-dropdown">
                        <Icon type="person"></Icon>
                    </div>
                    <Dropdown-menu slot="list" style="text-align: left;">
                        <Dropdown-item name="setting"> <Icon type="gear-a"></Icon> &nbsp;&nbsp;用户设置 </Dropdown-item>
                        <Dropdown-item name="logout" divided @click="logout"> <Icon type="log-out"></Icon> &nbsp;&nbsp;切换账号 </Dropdown-item>
                    </Dropdown-menu>
                </Dropdown>
            </Col>
        </Row>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed: mapState([
        'currentUser'
    ]),
    data() {
      return {
        
      };
    },
    methods: {
      logout() {
          this.$store.dispatch('logout');
      },
      handleUserDropdown(name) {
          if (name == 'logout') {
              this.logout();
          }
      }
    }
  }
</script>

<style scoped>
.header {
    background-color:  #48576a;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 10;
    height: 70px;
}

.logo {
    height: 35px;
    float: left;
    margin: 0 20px;
}

.title {
    color: #fff;
    font-size: 1.8em;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

.user-dropdown {
    line-height: 67px;
    font-size: 25px;
    color: #eee;
    min-width: 40px;
    text-align: center;
    cursor: pointer;
    padding: 0 10px;
    border-bottom: 3px solid #48576a;
}

.user-dropdown:hover {
    color: #fff;
    border-bottom-color: #fff;
}
</style>