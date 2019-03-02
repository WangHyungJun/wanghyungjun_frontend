<template>
  <header id="appheader">
    <div class="container">
      <div class="row">
        <div class="nav clearfix">
          <div class="Main_nav">
            <ul class="clearfix">
              <li><router-link to="/">Article</router-link></li>
              <li><router-link to="/albums">Albums</router-link></li>
              <li><router-link to="/aboutme">AboutMe</router-link></li>
              <li><a class="additional" href=".">LogIn</a></li>
              <li><a class="additional" href=".">Subscribe</a></li>
            </ul>
          </div>
          <!--//Main_nav-->
        </div>
        <!--//nav-->
      </div>
      <!--//row-->
    </div>
    <!--//container-->
  </header>
</template>

<script>
    export default {
    }
</script>

<style lang="scss" scoped>
  @import '../../../public/scss/reset';

  #appheader{
    font-family: Arial, sans-serif;
    .row {
      background-color: $greypastel;
      .nav {
        height: 60px;

        .Main_nav {
          width: 100%;
          margin: 0 auto;
          text-align: center;

          ul {
            display: flex;

            li {
              flex: 1 1 0;

              a {
                display: block;
                height: 60px;
                vertical-align: middle;
                color: $themecolor; transition: all 0.5s ease-in-out;

                &:before {
                  content: "";
                  vertical-align: middle;
                  height: 100%;
                  display: inline-block;
                }

                &:hover {
                  background: #eee;
                }
              }

              .additional {
                font-size: 12px;
              }
            }
          }
        }
      }
    }
  }
  @media (max-width: 450px){
    #appheader{
      font-size: 14px;
    }
  }
</style>
