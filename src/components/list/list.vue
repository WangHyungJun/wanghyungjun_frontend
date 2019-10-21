<template>
  <section class="content">
    <div class="container">
      <div class="row">
        <ul class="list_article">
          <li v-for="posting in filterBlogs" class="article clearfix">
            <a v-bind:href="posting.postlink" class="posting_has_image">
              <strong class="tit">{{posting.title}}</strong>
              <div class="thumbnail">
                <img v-bind:src="posting.thumbnail" alt="썸네일">
              </div>
              <div class="desc">
                {{posting.content}}
              </div>
              <span class="additional">
                {{posting.date}}
              </span>
            </a>
          </li>
        </ul>
        <!--//list_article-->
        <div v-show="nothing">아직 게시물이 존재하지 않습니다.</div>
      </div>
      <!--//row-->
    </div>
    <!--//container-->
  </section>
  <!--//content-->
</template>

<script>
  import searchMixin from '../../mixins/searchMixin'
  import {bus} from '../../main'

  export default {
  name: "list",
  data(){
      return {
        postdata : [],
        categoryName: 'all',
        search: '',
        nothing: false
      }
  },
  created(){
    this.$http.get("https://www.wanghyungjun-api.co.uk/blogapi/previousposts", {params:  {category: this.categoryName}}).then(function (data) {
      this.postdata=data.body;
    });
    bus.$on("seachChanged",(data)=>{
      this.search=data;
    });
    bus.$on("tossCategory",(data)=>{
      this.categoryName=data;
      this.$http.get("https://www.wanghyungjun-api.co.uk/blogapi/previousposts", {params:  {category: this.categoryName}}).then(function (data) {
        this.postdata=data.body;
        if(this.postdata.length==0){
          this.nothing=true;
        }else{
          this.nothing=false;
        }
      })
    });
  },
  mixins: [searchMixin]
}
</script>

<style lang="scss">
  @import '../../../public/scss/reset';
  @import '../../assets/sass/main';

  img{
    display: block;
    width: 100%;
    height: 100%;
  }

  .container{
    width: 1200px;
    margin: 0 auto;
    .row{
      padding: 0 15px;
    }
  }
  .content{
    margin: 30px 0;
    .list_article{
      .article{
        .posting_has_image{
          display: block;
          max-width: 680px;
          width: 80%;
          min-height: 200px;
          margin: 20px auto;
          border-bottom: 1px solid rgba(0,0,0,.1);

          .thumbnail{
            float: right;
            width: 200px;
            height: 150px;
            padding-top: 20px;

            img{
              height:100%;
            }
          }
          .desc{
            padding: 15px 0;
            box-sizing: border-box;
          }
        }
      }
    }
  }

  @media (max-width: 1280px) {
    .container{
      width: 100%;
    }
  }

  @media (max-width: 400px) {

  }

</style>
