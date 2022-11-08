<template>
  <div class="Access">
    <div class="Access-cnt">
      <div class="Access-ttl">
        <h3>ACCESS</h3>
        <p>住所</p>
      </div>
      <div class="Access-ad">
        <p class="Access-ad-post">Txxx-xxxx</p>
        <p class="Access-ad-txt">大阪府xx市oo町 000丁000番地</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
  .Access {
    margin-top: 100px;
    &-cnt {
      position: relative;
    }
    &-ttl {
      position: relative;
      h3 {
        text-align: right;
        font-size: 150px;
        color: transparent;
        -webkit-text-stroke: 1px #303030;
        margin: 0;
      }
      p {
        position: absolute;
        top: 26px;
        right: 10px;
        font-size: 45px;
        color: white;
      }
    }
    &-ad {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 450px;
      padding: 30px 0;
      background: #ffffff1a;
      border-right: solid #ffffff2b 1px;
      border-top: solid #ffffff2b;
      border-bottom: solid #ffffff2b 1px;
      &-post {
        color: #b3b3b3;
      }
      &-txt {
        margin-top: 10px;
        color: #b3b3b3;
      }
    }
  }

</style>