<template>
  <footer id="footer">
    <div class="container">
      <div class="row">
        <div>이곳은 Footer 영역입니다.</div>
      </div>
    </div>
  </footer>
</template>
<script>
  export default{

  }
</script>
<style lang="scss" scoped>
  @import '../../../public/scss/reset';

  #footer{
    height: 160px;
    color: white;
    text-align: center;
    .container{
      .row{
        height: 100%;
        background: $themecolor;
      }
    }

    div{
      line-height: 160px;
      vertical-align: middle;
    }
  }
</style>
