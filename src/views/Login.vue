<template>
    <div class="background">
        <el-row style="height: 100%;">
            <el-col :xs="{span:24, offset:0}" :sm="{span: 10, offset: 14}" :md="{span: 8, offset: 16}" style="height: 100%;">
                <Row class="login-panel" type="flex" align="middle">
                    <Col span="24">
                        <div>
                            <img src="../assets/logo.png" alt="logo" class="logo">
                        </div>
                        <p class="title">天津法院大数据分析平台</p>
                        <p class="title" style="margin-bottom: 60px;">行政子平台</p>

                        <Row class="form-item" style="margin-bottom: 25px;" type="flex" align="middle">
                            <Col span="4" style="text-align: left;">
                                <Icon type="ios-person-outline" :size="35"></Icon>
                            </Col>
                            <Col span="20">
                                <input type="text" placeholder="请输入用户名" v-model="info.user">
                            </Col>
                        </Row>

                        <Row class="form-item" type="flex" align="middle">
                            <Col span="4" style="text-align: left;">
                                <Icon type="ios-locked-outline" :size="30"></Icon>
                            </Col>
                            <Col span="20">
                                <input type="password" placeholder="请输入密码" v-model="info.password">
                            </Col>
                        </Row>

                        <Button type="info" @click="login">登录</Button>

                        <div style="width: 50%; text-align: left; margin: 10px auto 0 auto">
                            <Checkbox v-model="info.alive">保持登录状态</Checkbox>
                        </div>
                    </Col>
                </Row>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                info: {
                    alive: false,
                    user: '',
                    password: ''
                }
            }
        },
        methods: {
            login() {
                console.log(this.user);
                if (this.info.user && this.info.password) {
                    console.log('login  ');
                    this.$store.dispatch('login', this.info);
                }
            }
        }
    }
</script>

<style scoped>
.background {
    min-height: 450px;
    height: 100%;
    background-image: url(../assets/bg.png);
    background-size: 100% 100%;
}

.login-panel {
    background-color: #ffffff;
    opacity: 0.85;
    height: 100%;
    text-align: center;
}

.logo {
    width: 15%;
}

.title {
    font-size: 2em;
}

.ivu-btn {
    border-radius: 25px;
    height: 40px;
    width: 50%;
    font-size: 15px;

    margin: 40px auto 0 auto;
    display: block;
}

input {
    display: block;
    border: none;
    outline: none;
    font-size: 15px;
}

.form-item {
    margin: 0 auto;
    width: 50%;
    padding-bottom: 5px;
    border-bottom: 1px solid #ddd;
}

i {
    color: #7ed6fc;
}
</style>