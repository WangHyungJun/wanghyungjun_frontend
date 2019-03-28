<template>
    <section class="write">
      <div class="container">
        <div class="editor">
          <div id="content">
            <editor></editor>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
  import editormenu from './editor_icon'

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

<style lang="scss">
  /*@import "../../../../static/scss/reset";*/

  .write{
    margin: 15px auto 10px auto;


    #content{
      margin: 15px auto 0 auto;
      font-size: 21px;
      font-family: Nanum Gothic, sans-serif;
      padding: 0 10px;
    }
  }
</style>
