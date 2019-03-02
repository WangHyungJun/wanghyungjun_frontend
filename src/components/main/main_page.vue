<template>
  <section class="main">
    <div class="container">
      <div class="row clearfix">
          <mainside></mainside>
          <articlelist></articlelist>
      </div>
      <!--//row-->
    </div>
    <!--//container-->
  </section>
  <!--//content-->
</template>

<script>
  import articlelist from '../../components/list/list'
  import mainside from '../../components/main/main_side'

    export default {
      components:{
        'articlelist': articlelist,
        'mainside': mainside
      },
      data(){
          return {
            categories: [],
            search: ''
          }
      },
      created(){
        this.$http.get("http://wanghyungjun-backend-dev.us-west-2.elasticbeanstalk.com/blogapi/categories").then(function (data) {
          this.categories=data.body;
        });
      },
    }
</script>

<style lang="scss" scoped>
  @import '../../../public/scss/reset';
  .main{
    .main_side{
      margin-top: 45px;
      float: left;
      width: 20%;
    }
    .content{
      float: left;
      width: 80%;
    }
  }
  @media (max-width: 700px){
    .main{
      .main_side{
        width: 100%;
      }
      .content{
        width: 100%;
      }
    }
  }
</style>
