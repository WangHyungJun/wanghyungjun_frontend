<template>
    <section class="write">
        <div class="container">
            <div class="editor">
                <!--<div id="title" contenteditable="true">제목입니다.</div>-->
                <!--<div id="content" contenteditable="true" v-on:click="testtwo" v-on:keypress.enter.prevent="createNormal">안녕하세요</div>-->
                <!--<button v-on:click="test">TEST</button>-->
                <!--<div id="test">{{this.content}}</div>-->
                <div id="content">
                    <editor ref="write"></editor>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import editormenu from '../components/write/editor_icon'

    export default {
        name: "write",
        components: {
            editor: editormenu,
        },
        data(){
            return{
                // content: "",
                // editor: null,
            }
        },
        methods: {
            submit: function () {
                console.log(this.$refs);
            }

            //   test: function (el) {
            //       el.target.contentEditable=false;
            //       return this.content=document.getElementById("content").innerText;
            //   },
            //   testtwo: function (el) {
            //       console.log(1);
            //       return el.target.contentEditable=true;
            //   },
            //   createNormal: function () {
            //     console.log("enter");
            //     var normal=document.createElement("div");
            //
            //     return normal.className="plain";
            //   }
            // },
            // mounted() {
            //   this.editor = new Editor({
            //     content: '<p>This is just a boring paragraph</p>',
            //   })
            // }
        }
    }
</script>

<style lang="scss" scoped>
    /*@import "../../../../static/scss/reset";*/

    .write{
        margin: 15px auto 10px auto;

        /*#title{*/
        /*margin: 0 auto;*/
        /*max-width: 780px;*/
        /*font-size: 42px;*/
        /*font-family: Nanum Gothic, sans-serif;*/
        /*padding: 0 10px;*/
        /*white-space: pre-wrap;*/

        /*&:focus{*/
        /*outline: none;*/
        /*}*/
        /*}*/

        #content{
            margin: 15px auto 0 auto;
            font-size: 21px;
            font-family: Nanum Gothic, sans-serif;
            padding: 0 10px;
        }
    }
</style>
