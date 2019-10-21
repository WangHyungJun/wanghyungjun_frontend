<template>
    <div class="loginform">
        <div v-show="!findpassword">
            <div>유저네임을 입력하세요: <input v-model="loginform.username" type="text" placeholder="example@gmail.com"/></div>
            <div>비밀번호를 입력하세요:<input v-model="loginform.password" type="password" placeholder="숫자 및 기호 섞어서 사용"/></div>
            <button v-on:click="obtainToken(loginform)">로그인</button>
        </div>
        <div v-show="findpassword">
            <div>이메일을 입력하세요: <input v-model="loginform.email" type="text" placeholder="example@gmail.com"/></div>
            <button v-on:click="sendTemp">입력한 이메일에 임시비밀번호 전송하기</button>
        </div>
        <button v-show="!findpassword" v-on:click="findpassword=!findpassword">비밀번호 찾기</button>
        <div>{{errormessage}}</div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';

    export default {
        name: "Login",
        data(){
            return {
                loginform: {username:'', password:''},
                errormessage: '',
                findpassword: false,
                url:"http://127.0.0.1:8000/cofounderapi/loginapi"
            }
        },
        methods:{
            ...mapActions([
                "obtainToken",
                "refreshToken"
            ]),
            login: function () {
                this.$http.post(this.url,{
                    email: this.loginform.email,
                    password: this.loginform.password
                }).then(function (data) {
                    if(data.body['success']==false) this.errormessage=data.body['message'];
                    else {this.errormessage=''; alert(data.body['message']); this.$router.push({'name':"home"})}
                })
            },
            sendTemp: function () {
                this.$http.post(this.url,{
                    email: this.loginform.email,
                    findPassword: true
                }).then(function (data) {
                    alert(data.body['message']);
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .loginform{
        width: 80%;
        max-width: 720px;
        margin: 0 auto;
    }

</style>