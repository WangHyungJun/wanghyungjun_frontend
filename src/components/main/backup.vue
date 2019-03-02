<template>
  <section class="content">
    <div class="container">
      <div class="row">
        <div class="categories">
          <ul>
            <li v-for="categorie in categories" class="clearfix">
              <router-link v-bind:to="'/list/'+categorie.category" class="front">
                <img v-bind:src="categorie.imgUrl" alt="이미지">
              </router-link>
              <router-link  v-bind:to="'/list/'+categorie.category" class="back" v-bind:style="{'background-color': categorie.color}">
                {{categorie.name}}
              </router-link>
            </li>
          </ul>
        </div>
        <!--//categories-->
      </div>
      <!--//row-->
    </div>
    <!--//container-->
  </section>
  <!--//content-->
</template>

<script>
  export default {
    name: "main",
    data(){
      return {
        categories:[
          {name: 'All', imgUrl: require('../../../../static/img/stars.jpg'), color: '#A8C8F9', category: "all"},
          {name: 'Development', imgUrl: require('../../../../static/img/development.jpg'), color: '#FFDDA6', category: "development"},
          {name: 'BookReview', imgUrl: require('../../../../static/img/book.png'), color: '#EBE5E4', category: "bookreview"},
          {name: 'Think', imgUrl: require('../../../../static/img/think.jpg'), color: '#B8F3B8', category: "think"},
          {name: 'Travel', imgUrl: require('../../../../static/img/travel.jpg'), color: '#CCD1FF', category: "travel"},
          {name: 'Daily Life', imgUrl: require('../../../../static/img/dailylife.jpg'), color: '#FFBDBD', category: "dailylife"},
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../../../static/scss/reset';
  .content{
    .categories{
      margin: 40px auto;
      ul{
        display: flex;
        flex-wrap: wrap;
        list-style-type: none;
        padding: 0;

        li{
          flex-grow: 1;
          flex-basis: 300px;
          text-align: center;
          border: 1px solid #222;
          margin: 10px;
          height: 40vh;
          perspective: 600px;
          .blog-img {
            position: relative;
            display: block;
            font-size: 16px;
            background-color: #000;
            color: #fff;

            img{
              /*img는 인라인 요소이기 때문에 패딩 기본 장착이다.*/
              display: block;
              margin-bottom: 3px;
            }
            em {
              position: absolute; left: 50%; top:50%;
              transform: translate(-50%, -50%);
              width: 100%;
              text-align: center;
              z-index: 100;
              opacity: 0;
              transition: opacity 0.3s ease-in-out;
            }

            &:after{
              content: '';
              position: absolute; left:0; top:0;
              display:block;
              background: rgba(0,0,0,0);
              width: 100%; height: 100%;
              z-index: 50;
              transition: background 0.3s ease-in-out;
            }
            &:hover{
              &:after{
                background: rgba(0,0,0,.4);
              }

              em{
                opacity: 1;
              }
            }
          }

          .front{
            display: block;
            background-color: #0093bd; width: 100%; height: 100%;
            position: absolute; top: 0;
            transform: rotateX(0deg) rotateY(0deg);
            transition: all 0.5s ease-in-out;
            backface-visibility: hidden;

            img{
              height: 100%;
            }
          }
          .back{
            display: block;
            background-color: #0093bd; width: 100%; height: 100%;
            position: absolute; top: 0;
            z-index: -1;
            transform: rotateX(0deg) rotateY(-180deg);
            transition: all 0.5s ease-in-out;
            //backface-visibility: hidden;
            font-size: 32px;
            color:white;

            &:before{
              content: "";
              display: inline-block;
              height: 100%;
              vertical-align: middle;
            }
          }
          &:hover{
            .front{
              transform: rotateX(0deg) rotateY(180deg);
            }
            .back{
              transform: rotateX(0deg) rotateY(0deg);
              z-index: 1;
            }
          }
        }
      }
    }
  }
</style>
