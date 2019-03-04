<template>
  <aside class="main_side">
    <div class="search"><input type="search" v-model="search" v-on:keypress.enter.prevent="test" placeholder="전체 글 검색"></div>
    <div class="side_lst">
      <ul>
        <li v-for="category in categories" v-on:click="tossCategory">{{category.category_name}}
          <ul v-show="subShow">
            <li v-for="sub_category in category.subCategory">{{sub_category}}</li>
          </ul>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
  import {bus} from '../../main'

  export default {
    data(){
      return {
        categories: [],
        search: '',
        subShow: false
      }
    },
    methods:{
      test: function () {
        bus.$emit("seachChanged", this.search);
      },
      tossCategory: function (elm) {
        // console.log(elm.target.innerText);
        bus.$emit("tossCategory", elm.target.innerText)
      }
    },
    created(){
      this.$http.get("http://blog-backend-dev.ap-northeast-2.elasticbeanstalk.com/blogapi/categories").then(function (data) {
        this.categories=data.body;
      });
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../../public/scss/reset';

  .main_side{
    .search{
      max-width: 200px;
      margin: 0 auto;
      input{
        height: 24px;
      }
    }
    .side_lst {
      margin: 0 auto;
      max-width: 200px;

      ul {
        max-width: 200px;
        border: 1px solid $pinkpastel;
        box-sizing: border-box;
        margin-top: 10px;

        li {
          text-align: center;
          height: 30px;
          line-height: 30px;
          box-sizing: border-box;
          border-bottom: 0.5px dotted rgba(0, 0, 0, .3);

          &:hover {
            background: #eee;
          }
        }
      }
    }
  }
</style>
